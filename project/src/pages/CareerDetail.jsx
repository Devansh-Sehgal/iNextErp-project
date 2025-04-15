
// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import WhatsAppButton from '../components/WhatsAppButton';
// import { getPositionById } from '../services/positionsService';
// import { Button } from '@/components/ui/button';
// import { useToast } from "@/hooks/use-toast";
// import { 
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
//   DialogClose,
// } from "@/components/ui/dialog";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { 
//   Briefcase, MapPin, Clock, ArrowLeft, ArrowRight, Loader2
// } from 'lucide-react';

// const CareerDetail = () => {
//   const { id } = useParams();
//   const [job, setJob] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
//   const { toast } = useToast();
  
//   useEffect(() => {
//     window.scrollTo(0, 0);
//     fetchJobDetail(id);
//   }, [id]);
  
//   const fetchJobDetail = async (jobId) => {
//     try {
//       setLoading(true);
//       const jobData = await getPositionById(jobId);
      
//       if (!jobData) {
//         toast({
//           title: "Error",
//           description: "Job position not found.",
//           variant: "destructive"
//         });
//       } else {
//         setJob(jobData);
//       }
//     } catch (error) {
//       console.error("Error fetching job details:", error);
//       toast({
//         title: "Error",
//         description: "Failed to load job details.",
//         variant: "destructive"
//       });
//     } finally {
//       setLoading(false);
//     }
//   };
  
//   const calculateDaysAgo = (dateString) => {
//     const postedDate = new Date(dateString);
//     const currentDate = new Date();
//     const diffTime = Math.abs(currentDate - postedDate);
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//     return diffDays;
//   };
  
//   // Application Form Schema
//   const applicationFormSchema = z.object({
//     fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
//     email: z.string().email({ message: "Please enter a valid email address." }),
//     phone: z.string().min(10, { message: "Please enter a valid phone number." }),
//     coverLetter: z.string().min(50, { message: "Cover letter must be at least 50 characters." }),
//   });

//   // Application Form
//   const applicationForm = useForm({
//     resolver: zodResolver(applicationFormSchema),
//     defaultValues: {
//       fullName: "",
//       email: "",
//       phone: "",
//       coverLetter: "",
//     },
//   });

//   const onSubmitApplication = (data) => {
//     // In a real application, you would send this data to a server
//     console.log("Application data:", { ...data, jobId: job?.id, jobTitle: job?.title });
    
//     // Show success message
//     toast({
//       title: "Application Submitted",
//       description: "Thanks for your interest! We'll review your application and get back to you soon.",
//     });
    
//     // Close modal and reset form
//     setIsApplicationModalOpen(false);
//     applicationForm.reset();
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex flex-col">
//         <Navbar />
//         <div className="flex-grow flex items-center justify-center">
//           <div className="flex flex-col items-center">
//             <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
//             <p className="text-lg text-muted-foreground">Loading job details...</p>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     );
//   }
  
//   if (!job) {
//     return (
//       <div className="min-h-screen flex flex-col">
//         <Navbar />
//         <div className="flex-grow flex flex-col items-center justify-center px-4">
//           <h1 className="text-3xl font-bold mb-4">Job Not Found</h1>
//           <p className="text-muted-foreground text-lg mb-8">The job position you're looking for doesn't exist or has been removed.</p>
//           <Link to="/career">
//             <Button>
//               <ArrowLeft className="mr-2 h-4 w-4" />
//               Back to Careers
//             </Button>
//           </Link>
//         </div>
//         <Footer />
//       </div>
//     );
//   }
  
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
      
//       <main className="flex-grow pt-20">
//         {/* Hero Section */}
//         <section className="py-12 bg-gradient-to-b from-muted/70 to-background">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto">
//               <div className="mb-8">
//                 <Link to="/career" className="inline-flex items-center text-primary hover:underline mb-4">
//                   <ArrowLeft className="h-4 w-4 mr-2" />
//                   Back to All Positions
//                 </Link>
//                 <h1 className="text-3xl md:text-4xl font-bold mb-6">{job.title}</h1>
//                 <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
//                   <div className="flex items-center">
//                     <MapPin className="h-5 w-5 mr-1" />
//                     {job.location}
//                   </div>
//                   <div className="flex items-center">
//                     <Briefcase className="h-5 w-5 mr-1" />
//                     {job.type}
//                   </div>
//                   <div className="flex items-center">
//                     <Clock className="h-5 w-5 mr-1" />
//                     Posted {calculateDaysAgo(job.postedDate)} days ago
//                   </div>
//                 </div>
                
//                 <Button 
//                   size="lg"
//                   onClick={() => setIsApplicationModalOpen(true)}
//                   className="mt-2"
//                 >
//                   Apply Now
//                 </Button>
//               </div>
              
//               <div className="prose max-w-none">
//                 {job.description && (
//                   <div className="mb-8">
//                     <h2 className="text-xl font-semibold mb-3">Job Overview</h2>
//                     <p className="text-muted-foreground">{job.description}</p>
//                   </div>
//                 )}
                
//                 {job.overview && (
//                   <div className="mb-8">
//                     <h2 className="text-xl font-semibold mb-3">Overview</h2>
//                     <p className="text-muted-foreground">{job.overview}</p>
//                   </div>
//                 )}
                
//                 {job.responsibilities && job.responsibilities.length > 0 && (
//                   <div className="mb-8">
//                     <h2 className="text-xl font-semibold mb-3">Key Responsibilities</h2>
//                     <ul className="list-disc pl-5 space-y-2">
//                       {job.responsibilities.map((item, index) => (
//                         <li key={index} className="text-muted-foreground">{item}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
                
//                 {job.requirements && job.requirements.length > 0 && (
//                   <div className="mb-8">
//                     <h2 className="text-xl font-semibold mb-3">Required Skills & Qualifications</h2>
//                     <ul className="list-disc pl-5 space-y-2">
//                       {job.requirements.map((item, index) => (
//                         <li key={index} className="text-muted-foreground">{item}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
                
//                 {job.preferredSkills && job.preferredSkills.length > 0 && (
//                   <div className="mb-8">
//                     <h2 className="text-xl font-semibold mb-3">Preferred Skills</h2>
//                     <ul className="list-disc pl-5 space-y-2">
//                       {job.preferredSkills.map((item, index) => (
//                         <li key={index} className="text-muted-foreground">{item}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
                
//                 {job.education && (
//                   <div className="mb-8">
//                     <h2 className="text-xl font-semibold mb-3">Education and Experience</h2>
//                     <p className="text-muted-foreground">{job.education}</p>
//                   </div>
//                 )}
                
//                 {job.benefits && job.benefits.length > 0 && (
//                   <div className="mb-8">
//                     <h2 className="text-xl font-semibold mb-3">Benefits</h2>
//                     <ul className="list-disc pl-5 space-y-2">
//                       {job.benefits.map((item, index) => (
//                         <li key={index} className="text-muted-foreground">{item}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
              
//               <div className="mt-10 border-t border-muted pt-8">
//                 <h2 className="text-xl font-semibold mb-4">Apply for this Position</h2>
//                 <p className="mb-6 text-muted-foreground">
//                   Ready to take the next step in your career? Submit your application to join our team.
//                 </p>
//                 <Button 
//                   size="lg"
//                   onClick={() => setIsApplicationModalOpen(true)}
//                   className="flex items-center gap-2"
//                 >
//                   Apply Now
//                   <ArrowRight className="h-5 w-5" />
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
      
//       <Footer />
//       <WhatsAppButton />

//       {/* Job Application Modal */}
//       <Dialog open={isApplicationModalOpen} onOpenChange={setIsApplicationModalOpen}>
//         <DialogContent className="sm:max-w-[500px]">
//           <DialogHeader>
//             <DialogTitle>Apply for {job?.title}</DialogTitle>
//             <DialogDescription>
//               Complete the form below to submit your application.
//             </DialogDescription>
//           </DialogHeader>
//           <Form {...applicationForm}>
//             <form onSubmit={applicationForm.handleSubmit(onSubmitApplication)} className="space-y-4">
//               <FormField
//                 control={applicationForm.control}
//                 name="fullName"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Full Name</FormLabel>
//                     <FormControl>
//                       <Input placeholder="John Doe" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={applicationForm.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Email</FormLabel>
//                     <FormControl>
//                       <Input placeholder="your@email.com" type="email" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={applicationForm.control}
//                 name="phone"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Phone Number</FormLabel>
//                     <FormControl>
//                       <Input placeholder="Your phone number" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={applicationForm.control}
//                 name="coverLetter"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Cover Letter</FormLabel>
//                     <FormControl>
//                       <Textarea 
//                         placeholder="Tell us why you're a good fit for this position..." 
//                         className="min-h-[120px]"
//                         {...field} 
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <div className="pt-4 flex justify-end gap-2">
//                 <DialogClose asChild>
//                   <Button type="button" variant="outline">Cancel</Button>
//                 </DialogClose>
//                 <Button type="submit">Submit Application</Button>
//               </div>
//             </form>
//           </Form>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default CareerDetail;


import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, Briefcase, MapPin, Clock, GraduationCap, CheckCircle2, 
  ArrowRight, Award, FileEdit
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { getPositionById } from '../services/positionsService';
import ApplicationModal from '../components/jobs/ApplicationModal';

const CareerDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  
  // Use React Query to fetch the job
  const { data: job, isLoading, error } = useQuery({
    queryKey: ['job', id],
    queryFn: () => getPositionById(id),
    onError: (error) => {
      console.error("Error fetching job details:", error);
      toast({
        title: "Error",
        description: "Failed to load job details.",
        variant: "destructive"
      });
    }
  });
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  const handleApply = () => {
    setIsApplicationModalOpen(true);
  };
  
  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-28">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="animate-pulse">
                <div className="h-8 bg-muted rounded w-1/3 mx-auto mb-4"></div>
                <div className="h-4 bg-muted rounded w-1/4 mx-auto mb-12"></div>
                <div className="h-4 bg-muted rounded w-3/4 mx-auto mb-2"></div>
                <div className="h-4 bg-muted rounded w-2/3 mx-auto mb-2"></div>
                <div className="h-4 bg-muted rounded w-3/4 mx-auto mb-8"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Error state
  if (error || !job) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-28">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Position Not Found</h1>
            <p className="text-muted-foreground mb-8">
              Sorry, the job position you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/careers">
              <Button>
                <ArrowLeft className="mr-2 w-4 h-4" />
                Return to Careers
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28">
        <div className="container mx-auto px-4">
          {/* Back button */}
          <div className="mb-8">
            <Link to="/careers">
              <Button variant="outline" className="flex items-center gap-1">
                <ArrowLeft className="w-4 h-4" />
                Back to All Positions
              </Button>
            </Link>
          </div>
          
          {/* Job Header */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{job.title}</h1>
            
            <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {job.location}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {job.type}
              </div>
              <div className="flex items-center">
                <Briefcase className="h-4 w-4 mr-1" />
                {job.category.charAt(0).toUpperCase() + job.category.slice(1)}
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button onClick={handleApply} size="lg" className="flex items-center gap-2">
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Job Description */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <section className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold mb-4">Job Description</h2>
                <p className="text-muted-foreground mb-6">{job.description}</p>
                
                {job.overview && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Overview</h3>
                    <p className="text-muted-foreground">{job.overview}</p>
                  </div>
                )}
                
                {job.responsibilities && job.responsibilities.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Key Responsibilities</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {job.responsibilities.map((item, index) => (
                        <li key={index} className="text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {job.requirements && job.requirements.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Required Skills and Qualifications</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {job.requirements.map((item, index) => (
                        <li key={index} className="text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {job.preferredSkills && job.preferredSkills.length > 0 && job.preferredSkills[0] !== '' && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Preferred Skills</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {job.preferredSkills.map((item, index) => (
                        <li key={index} className="text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {job.education && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Education and Experience</h3>
                    <div className="flex items-start">
                      <GraduationCap className="h-5 w-5 mr-2 text-primary mt-1" />
                      <p className="text-muted-foreground">{job.education}</p>
                    </div>
                  </div>
                )}
              </section>
              
              {/* Call to Action */}
              <section className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Apply for this Position</h3>
                <p className="mb-4">Ready to take the next step in your career? We'd love to hear from you!</p>
                <Button onClick={handleApply} className="flex items-center gap-2">
                  Submit Your Application
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </section>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Job Summary */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Job Summary</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Briefcase className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <span className="text-sm text-muted-foreground block">Department</span>
                      <span className="font-medium">{job.department || job.category.charAt(0).toUpperCase() + job.category.slice(1)}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <span className="text-sm text-muted-foreground block">Location</span>
                      <span className="font-medium">{job.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <span className="text-sm text-muted-foreground block">Job Type</span>
                      <span className="font-medium">{job.type}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Benefits */}
              {job.benefits && job.benefits.length > 0 && job.benefits[0] !== '' && (
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Benefits</h3>
                  <ul className="space-y-3">
                    {job.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Company Values */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Our Values</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Award className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>Excellence in everything we do</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>Innovation and continuous improvement</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>Collaboration and teamwork</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>Customer-centric approach</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <WhatsAppButton />
      
      {/* Application Modal */}
      <ApplicationModal
        isOpen={isApplicationModalOpen}
        setIsOpen={setIsApplicationModalOpen}
        selectedJob={job}
        toast={toast}
      />
    </div>
  );
};

export default CareerDetail;