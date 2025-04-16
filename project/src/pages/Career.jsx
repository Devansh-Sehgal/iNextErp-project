import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";
import { 
  Briefcase, MapPin, Clock, ChevronDown, ChevronUp, Shield, 
  ArrowRight, FileText
} from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import { Link } from 'react-router-dom';
import { getAllPositions } from '../services/positionsService';
import JobCategory from '../components/jobs/JobCategory';
import AdminPanel from '../components/jobs/AdminPanel';
import ApplicationModal from '../components/jobs/ApplicationModal';

const Career = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedJob, setExpandedJob] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminDialogOpen, setIsAdminDialogOpen] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [categories, setCategories] = useState([{ id: 'all', label: 'All Positions' }]);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  
  const { toast } = useToast();
  
  // Use React Query to fetch jobs
  const { data: jobs = [], isLoading: loading } = useQuery({
    queryKey: ['jobs'],
    queryFn: getAllPositions,
    onError: (error) => {
      console.error("Error fetching jobs:", error);
      toast({
        title: "Error",
        description: "Failed to load job positions.",
        variant: "destructive"
      });
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    extractUniqueCategories();
  }, [jobs]);
  
  const extractUniqueCategories = () => {
    if (!jobs || jobs.length === 0) return;
    
    const uniqueCategories = [{ id: 'all', label: 'All Positions' }];
    const categoryMap = {};
    
    jobs.forEach(job => {
      if (job.category && !categoryMap[job.category]) {
        // Convert category ID to display format (capitalize first letter, etc.)
        const label = job.category.charAt(0).toUpperCase() + job.category.slice(1);
        categoryMap[job.category] = true;
        uniqueCategories.push({ id: job.category, label });
      }
    });
    
    if (uniqueCategories.length > 1) {
      setCategories(uniqueCategories);
    }
  };

  const handleAdminLogin = () => {
    const correctPassword = "admin123"; // In a real app, this would be stored securely
    
    if (adminPassword === correctPassword) {
      setIsAdmin(true);
      setIsAdminDialogOpen(false);
      setAdminPassword("");
      
      toast({
        title: "Admin Mode Activated",
        description: "You can now add, edit, and delete job positions."
      });
    } else {
      toast({
        title: "Access Denied",
        description: "Incorrect password. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleLogoutAdmin = () => {
    setIsAdmin(false);
    toast({
      title: "Logged Out",
      description: "Admin mode deactivated.",
    });
  };

  const calculateDaysAgo = (dateString) => {
    const postedDate = new Date(dateString);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - postedDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const filteredJobs = activeTab === 'all' 
    ? jobs 
    : jobs.filter(job => job.category === activeTab);

  const handleApply = (job) => {
    setSelectedJob(job);
    setIsApplicationModalOpen(true);
  };

  const toggleJobDetails = (jobId) => {
    if (expandedJob === jobId) {
      setExpandedJob(null);
    } else {
      setExpandedJob(jobId);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
                Join Our Team
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-up delay-100">
                Be part of our mission to transform retail operations across India
              </p>
              <Button
                size="lg"
                className="animate-fade-up delay-200"
                onClick={() => document.getElementById('open-positions').scrollIntoView({ behavior: 'smooth' })}
              >
                View Open Positions
              </Button>
              
              {/* Admin toggle button - moved to top right for better visibility */}
              <div className="fixed top-24 right-4 z-30">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1 bg-white/80 backdrop-blur-sm border shadow-sm"
                  onClick={isAdmin ? handleLogoutAdmin : () => setIsAdminDialogOpen(true)}
                >
                  <Shield size={16} />
                  {isAdmin ? "Exit Admin" : "Admin"}
                </Button>
              </div>
            </div>
          </div>
          
          {/* Background elements */}
          <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </section>

        {/* Admin Panel - Only shown when admin is logged in */}
        {isAdmin && <AdminPanel setIsAdmin={setIsAdmin} toast={toast} />}

        {/* Why Join Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-tr from-sky-50 to-indigo-50 rounded-xl p-6 shadow-sm">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <div className="text-primary h-6 w-6">✓</div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation Focus</h3>
                <p className="text-muted-foreground">Work on cutting-edge solutions that are transforming retail operations across India.</p>
              </div>
              
              <div className="bg-gradient-to-tr from-purple-50 to-blue-50 rounded-xl p-6 shadow-sm">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <div className="text-primary h-6 w-6">✓</div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Growth Opportunities</h3>
                <p className="text-muted-foreground">Continuous learning and development paths to advance your skills and career.</p>
              </div>
              
              <div className="bg-gradient-to-tr from-blue-50 to-sky-50 rounded-xl p-6 shadow-sm">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <div className="text-primary h-6 w-6">✓</div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Inclusive Culture</h3>
                <p className="text-muted-foreground">Join a diverse team that values collaboration, respect, and work-life balance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section id="open-positions" className="py-16 bg-muted/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6">Open Positions</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Explore our current openings and find the role that matches your skills and aspirations
            </p>
            
            {/* Category tabs */}
            <JobCategory categories={categories} activeTab={activeTab} setActiveTab={setActiveTab} />
            
            {/* Job listings */}
            <div className="space-y-4 max-w-4xl mx-auto">
              {loading ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Loading positions...</p>
                </div>
              ) : filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <div key={job.id} className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300">
                    {/* Job header - always visible */}
                    <div 
                      className="p-6 cursor-pointer hover:bg-muted/10 flex flex-col md:flex-row md:items-center justify-between"
                      onClick={() => toggleJobDetails(job.id)}
                    >
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
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
                      </div>
                      
                      <div className="flex items-center mt-4 md:mt-0">
                        <span className="text-sm text-muted-foreground mr-6">
                          Posted {calculateDaysAgo(job.postedDate)} days ago
                        </span>
                        {expandedJob === job.id ? (
                          <ChevronUp className="h-5 w-5 text-primary" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-primary" />
                        )}
                      </div>
                    </div>
                    
                    {/* Job details - expandable */}
                    {expandedJob === job.id && (
                      <div className="p-6 pt-0 border-t border-muted">
                        <p className="mb-6">{job.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {job.responsibilities && job.responsibilities.slice(0, 3).map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                          {job.responsibilities && job.responsibilities.length > 3 && (
                            <p className="text-sm text-primary mt-2">+ more responsibilities</p>
                          )}
                        </div>
                        
                        <div className="flex gap-3">
                          <Link to={`/careers/${job.id}`}>
                            <Button variant="outline" className="flex items-center gap-2">
                              <FileText className="h-4 w-4" />
                              View Full Details
                            </Button>
                          </Link>
                          
                          <Button onClick={() => handleApply(job)}>
                            Apply Now
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No open positions in this category at the moment.</p>
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* Application Process Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">Our Hiring Process</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Vertical timeline line */}
                <div className="absolute left-5 top-0 w-0.5 h-full bg-muted-foreground/20 hidden md:block"></div>
                
                {/* Timeline items */}
                <div className="space-y-12">
                  {[
                    { title: "Application Review", description: "Our recruiting team reviews your application and resume." },
                    { title: "Initial Interview", description: "A conversation to learn more about your experience and interests." },
                    { title: "Technical Assessment", description: "A task or interview relevant to the role you're applying for." },
                    { title: "Team Interview", description: "Meet the team you'll be working with to ensure mutual fit." },
                    { title: "Offer & Onboarding", description: "Upon selection, we'll present an offer and welcome you aboard!" }
                  ].map((step, index) => (
                    <div key={index} className="relative flex items-start">
                      <div className="mr-4 md:mr-8 flex-shrink-0">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-semibold">
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />

      {/* Admin Login Dialog */}
      <AdminPanel.LoginDialog 
        isOpen={isAdminDialogOpen} 
        setIsOpen={setIsAdminDialogOpen}
        adminPassword={adminPassword}
        setAdminPassword={setAdminPassword}
        handleAdminLogin={handleAdminLogin}
      />

      {/* Job Application Modal */}
      <ApplicationModal 
        isOpen={isApplicationModalOpen}
        setIsOpen={setIsApplicationModalOpen}
        selectedJob={selectedJob}
        toast={toast}
      />
    </div>
  );
};

export default Career;