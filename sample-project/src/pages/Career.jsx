
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";
import { 
  Briefcase, MapPin, Clock, ChevronDown, ChevronUp, Check, Shield, 
  FileEdit, Trash2, Plus, X, ArrowRight, FileText, BookOpen, GraduationCap 
} from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { 
  getAllPositions, 
  getPositionsByCategory, 
  getPositionById, 
  addPosition, 
  updatePosition, 
  deletePosition 
} from '../services/positionsService';

const Career = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedJob, setExpandedJob] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminDialogOpen, setIsAdminDialogOpen] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [jobs, setJobs] = useState([]);
  const [categories, setCategories] = useState([
    { id: 'all', label: 'All Positions' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'design', label: 'Design' },
    { id: 'product', label: 'Product' },
    { id: 'sales', label: 'Sales & Marketing' }
  ]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    type: 'Full-time',
    category: 'engineering',
    description: '',
    responsibilities: [''],
    requirements: ['']
  });
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentJobId, setCurrentJobId] = useState(null);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  
  const { toast } = useToast();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchJobs();
    extractUniqueCategories();
  }, []);
  
  const extractUniqueCategories = async () => {
    try {
      const allJobs = await getAllPositions();
      const uniqueCategories = [{ id: 'all', label: 'All Positions' }];
      
      const categoryMap = {};
      allJobs.forEach(job => {
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
    } catch (error) {
      console.error("Error extracting categories:", error);
    }
  };
  
  const fetchJobs = async () => {
    setLoading(true);
    try {
      const jobsList = await getAllPositions();
      setJobs(jobsList);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      toast({
        title: "Error",
        description: "Failed to load job positions.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };
  
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleListItemChange = (index, field, value) => {
    setFormData(prev => {
      const newItems = [...prev[field]];
      newItems[index] = value;
      return { ...prev, [field]: newItems };
    });
  };
  
  const addListItem = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };
  
  const removeListItem = (index, field) => {
    if (formData[field].length <= 1) return;
    
    setFormData(prev => {
      const newItems = [...prev[field]];
      newItems.splice(index, 1);
      return { ...prev, [field]: newItems };
    });
  };
  
  const resetForm = () => {
    setFormData({
      title: '',
      location: '',
      type: 'Full-time',
      category: 'engineering',
      description: '',
      responsibilities: [''],
      requirements: ['']
    });
    setIsAdding(false);
    setIsEditing(false);
    setCurrentJobId(null);
  };
  
  const handleAddJob = async (e) => {
    e.preventDefault();
    
    try {
      await addPosition(formData);
      
      toast({
        title: "Success",
        description: "Job position added successfully!",
      });
      
      resetForm();
      fetchJobs();
      extractUniqueCategories();
    } catch (error) {
      console.error("Error adding job:", error);
      toast({
        title: "Error",
        description: "Failed to add job position.",
        variant: "destructive"
      });
    }
  };
  
  const handleEditJob = (job) => {
    setFormData({
      title: job.title,
      location: job.location,
      type: job.type,
      category: job.category,
      description: job.description,
      responsibilities: job.responsibilities,
      requirements: job.requirements
    });
    setCurrentJobId(job.id);
    setIsEditing(true);
    setIsAdding(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleUpdateJob = async (e) => {
    e.preventDefault();
    
    try {
      await updatePosition(currentJobId, formData);
      
      toast({
        title: "Success",
        description: "Job position updated successfully!",
      });
      
      resetForm();
      fetchJobs();
      extractUniqueCategories();
    } catch (error) {
      console.error("Error updating job:", error);
      toast({
        title: "Error",
        description: "Failed to update job position.",
        variant: "destructive"
      });
    }
  };
  
  const handleDeleteJob = async (jobId) => {
    if (window.confirm("Are you sure you want to delete this job posting?")) {
      try {
        await deletePosition(jobId);
        
        toast({
          title: "Success",
          description: "Job position deleted successfully!",
        });
        
        fetchJobs();
        extractUniqueCategories();
      } catch (error) {
        console.error("Error deleting job:", error);
        toast({
          title: "Error",
          description: "Failed to delete job position.",
          variant: "destructive"
        });
      }
    }
  };

  const openAdminDialog = () => {
    setIsAdminDialogOpen(true);
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

  const onSubmitApplication = (data) => {
    // In a real application, you would send this data to a server
    console.log("Application data:", { ...data, jobId: selectedJob?.id, jobTitle: selectedJob?.title });
    
    // Show success message
    toast({
      title: "Application Submitted",
      description: "Thanks for your interest! We'll review your application and get back to you soon.",
    });
    
    // Close modal and reset form
    setIsApplicationModalOpen(false);
    applicationForm.reset();
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
                  onClick={isAdmin ? handleLogoutAdmin : openAdminDialog}
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

        {/* Admin Form Section */}
        {isAdmin && (
          <section className="py-16 bg-slate-50 border-t border-b border-slate-200">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Admin: Manage Job Positions</h2>
                {!isAdding && (
                  <Button onClick={() => setIsAdding(true)}>
                    <Plus size={16} className="mr-2" /> Add New Position
                  </Button>
                )}
              </div>
              
              {isAdding && (
                <form 
                  onSubmit={isEditing ? handleUpdateJob : handleAddJob}
                  className="bg-white p-6 rounded-lg shadow-sm max-w-3xl mx-auto mb-8"
                >
                  <h3 className="text-xl font-semibold mb-4">{isEditing ? 'Edit Position' : 'Add New Position'}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <label htmlFor="title" className="block font-medium">Job Title</label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleFormChange}
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="location" className="block font-medium">Location</label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleFormChange}
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="type" className="block font-medium">Job Type</label>
                      <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleFormChange}
                        className="w-full p-2 border rounded"
                      >
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Internship">Internship</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="category" className="block font-medium">Category</label>
                      <input
                        type="text"
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleFormChange}
                        className="w-full p-2 border rounded"
                        placeholder="e.g., engineering, design, sales"
                        required
                      />
                      <p className="text-xs text-muted-foreground">Use lowercase for category names</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="description" className="block font-medium mb-2">Job Description</label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleFormChange}
                      className="w-full p-2 border rounded h-24"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <label className="block font-medium">Responsibilities</label>
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm"
                        onClick={() => addListItem('responsibilities')}
                      >
                        Add
                      </Button>
                    </div>
                    
                    {formData.responsibilities.map((item, index) => (
                      <div key={index} className="flex gap-2 mb-2">
                        <input
                          type="text"
                          value={item}
                          onChange={(e) => handleListItemChange(index, 'responsibilities', e.target.value)}
                          className="flex-grow p-2 border rounded"
                          required
                        />
                        <Button 
                          type="button" 
                          variant="outline" 
                          size="sm"
                          onClick={() => removeListItem(index, 'responsibilities')}
                        >
                          Remove
                        </Button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <label className="block font-medium">Requirements</label>
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm"
                        onClick={() => addListItem('requirements')}
                      >
                        Add
                      </Button>
                    </div>
                    
                    {formData.requirements.map((item, index) => (
                      <div key={index} className="flex gap-2 mb-2">
                        <input
                          type="text"
                          value={item}
                          onChange={(e) => handleListItemChange(index, 'requirements', e.target.value)}
                          className="flex-grow p-2 border rounded"
                          required
                        />
                        <Button 
                          type="button" 
                          variant="outline" 
                          size="sm"
                          onClick={() => removeListItem(index, 'requirements')}
                        >
                          Remove
                        </Button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button type="submit">
                      {isEditing ? 'Update Position' : 'Add Position'}
                    </Button>
                    <Button type="button" variant="outline" onClick={resetForm}>
                      Cancel
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </section>
        )}

        {/* Why Join Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-tr from-sky-50 to-indigo-50 rounded-xl p-6 shadow-sm">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Check className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation Focus</h3>
                <p className="text-muted-foreground">Work on cutting-edge solutions that are transforming retail operations across India.</p>
              </div>
              
              <div className="bg-gradient-to-tr from-purple-50 to-blue-50 rounded-xl p-6 shadow-sm">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Check className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Growth Opportunities</h3>
                <p className="text-muted-foreground">Continuous learning and development paths to advance your skills and career.</p>
              </div>
              
              <div className="bg-gradient-to-tr from-blue-50 to-sky-50 rounded-xl p-6 shadow-sm">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Check className="text-primary h-6 w-6" />
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
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeTab === category.id ? "default" : "outline"}
                  className="mb-2"
                  onClick={() => setActiveTab(category.id)}
                >
                  {category.label}
                </Button>
              ))}
            </div>
            
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
                            {job.responsibilities.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold mb-2">Requirements:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {job.requirements.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex gap-3">
                          <Button onClick={() => handleApply(job)}>
                            Apply Now
                          </Button>
                          
                          {isAdmin && (
                            <>
                              <Button 
                                variant="outline" 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleEditJob(job);
                                }}
                              >
                                <FileEdit className="h-4 w-4 mr-2" /> Edit
                              </Button>
                              
                              <Button 
                                variant="destructive" 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDeleteJob(job.id);
                                }}
                              >
                                <Trash2 className="h-4 w-4 mr-2" /> Delete
                              </Button>
                            </>
                          )}
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
        
        {/* Career Resources Hub Section - updated with no action buttons */}
        <section className="py-16 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Career Resources Hub</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Access our library of resources to help you succeed in your career journey
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="w-12 h-12 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Resume Building Tips</h3>
                <p className="text-white/80">
                  Learn how to create a resume that highlights your skills and experience effectively.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="w-12 h-12 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Interview Preparation</h3>
                <p className="text-white/80">
                  Get ready for technical and behavioral interviews with our comprehensive guides.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="w-12 h-12 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Career Growth Paths</h3>
                <p className="text-white/80">
                  Discover potential career trajectories and growth opportunities within our company.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />

      {/* Admin Login Dialog */}
      <Dialog open={isAdminDialogOpen} onOpenChange={setIsAdminDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Admin Login</DialogTitle>
            <DialogDescription>
              Enter the admin password to access job management features.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="adminPassword" className="text-sm font-medium">
                Password
              </label>
              <Input 
                id="adminPassword" 
                type="password" 
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                autoFocus
                placeholder="Enter admin password"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleAdminLogin();
                  }
                }}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAdminDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAdminLogin}>Login</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Job Application Modal */}
      <Dialog open={isApplicationModalOpen} onOpenChange={setIsApplicationModalOpen}>
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
                      <Input placeholder="your@email.com" type="email" {...field} />
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
                      <Input placeholder="Your phone number" {...field} />
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
                        placeholder="Tell us why you're a good fit for this position..." 
                        className="min-h-[120px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-4 flex justify-end gap-2">
                <DialogClose asChild>
                  <Button type="button" variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Submit Application</Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Career;