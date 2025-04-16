
import React from 'react';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import emailjs from 'emailjs-com';

const ApplicationModal = ({ isOpen, setIsOpen, selectedJob, toast }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Application Form Schema
  const applicationFormSchema = z.object({
    fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    phone: z.string().min(10, { message: "Please enter a valid phone number." }),
    coverLetter: z.string().min(50, { message: "Cover letter must be at least 50 characters." }),
  });

  // Application Form
  const applicationForm = useForm({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      coverLetter: "",
    },
  });

  const onSubmitApplication = async (data) => {
    setIsSubmitting(true);

    try {
      // Format message for email with job title prominently displayed
      const formattedMessage = `
        Job Application for: ${selectedJob?.title}
        Position ID: ${selectedJob?.id}
        
        Applicant Information:
        ---------------------
        Name: ${data.fullName}
        Email: ${data.email}
        Phone: ${data.phone}
        
        Cover Letter:
        ---------------------
        ${data.coverLetter}
      `;

      // Prepare the template parameters for EmailJS
      const templateParams = {
        from_name: data.fullName,
        phone_number: data.phone,
        message: formattedMessage,
        to_email: "Info@inexterpsolutions.com",
        subject: `Job Application for ${selectedJob?.title}`,
      };

      // Send email using EmailJS
      await emailjs.send(
        "service_kcdgjkn", // Service ID
        "template_g4gwmo7", // Template ID
        templateParams,
        "F2tTKnOXIv5menGxL" // User ID (public key)
      );

      // Show success message
      toast({
        title: "Application Submitted",
        description: "Thanks for your interest! We'll review your application and get back to you soon.",
      });

      // Close modal and reset form
      setIsOpen(false);
      applicationForm.reset();
    } catch (error) {
      console.error("Error sending application:", error);
      toast({
        title: "Error",
        description: "There was a problem submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Apply for {selectedJob?.title}</DialogTitle>
          <DialogDescription>
            Complete the form below to submit your application.
          </DialogDescription>
        </DialogHeader>
        <Form {...applicationForm}>
          <form onSubmit={applicationForm.handleSubmit(onSubmitApplication)} className="space-y-4">
            <FormField
              control={applicationForm.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={applicationForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="example@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={applicationForm.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+1 (555) 000-0000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={applicationForm.control}
              name="coverLetter"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cover Letter</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                      className="h-32"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end space-x-2 pt-2">
              <Button type="button" variant="outline" onClick={() => setIsOpen(false)} disabled={isSubmitting}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationModal;