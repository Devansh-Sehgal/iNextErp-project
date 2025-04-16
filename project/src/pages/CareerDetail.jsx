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