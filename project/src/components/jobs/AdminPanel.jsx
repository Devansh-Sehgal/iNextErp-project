
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Plus, FileEdit, Trash2 } from 'lucide-react';
import { addPosition, updatePosition, deletePosition } from '../../services/positionsService';
import { useQueryClient } from '@tanstack/react-query';

const AdminPanel = ({ setIsAdmin, toast }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentJobId, setCurrentJobId] = useState(null);
  const queryClient = useQueryClient();
  const jobs = queryClient.getQueryData(['jobs']) || [];
  
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    type: 'Full-time',
    category: 'engineering',
    description: '',
    overview: '',
    responsibilities: [''],
    requirements: [''],
    preferredSkills: [''],
    education: '',
    benefits: ['']
  });

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
      overview: '',
      responsibilities: [''],
      requirements: [''],
      preferredSkills: [''],
      education: '',
      benefits: ['']
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
      queryClient.invalidateQueries(['jobs']);
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
      overview: job.overview || '',
      responsibilities: job.responsibilities,
      requirements: job.requirements,
      preferredSkills: job.preferredSkills || [''],
      education: job.education || '',
      benefits: job.benefits || ['']
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
      queryClient.invalidateQueries(['jobs']);
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
        
        queryClient.invalidateQueries(['jobs']);
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

  return (
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
              <label htmlFor="overview" className="block font-medium mb-2">Job Overview</label>
              <textarea
                id="overview"
                name="overview"
                value={formData.overview || ''}
                onChange={handleFormChange}
                className="w-full p-2 border rounded h-24"
              ></textarea>
            </div>
            
            {/* Responsibilities */}
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
            
            {/* Requirements */}
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
            
            {/* Preferred Skills */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="block font-medium">Preferred Skills (Optional)</label>
                <Button 
                  type="button" 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    if (!formData.preferredSkills) {
                      setFormData(prev => ({...prev, preferredSkills: ['']}));
                    } else {
                      addListItem('preferredSkills');
                    }
                  }}
                >
                  Add
                </Button>
              </div>
              
              {formData.preferredSkills && formData.preferredSkills.map((item, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => handleListItemChange(index, 'preferredSkills', e.target.value)}
                    className="flex-grow p-2 border rounded"
                  />
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm"
                    onClick={() => removeListItem(index, 'preferredSkills')}
                  >
                    Remove
                  </Button>
                </div>
              ))}
            </div>
            
            {/* Education */}
            <div className="mb-6">
              <label htmlFor="education" className="block font-medium mb-2">Education & Experience (Optional)</label>
              <textarea
                id="education"
                name="education"
                value={formData.education || ''}
                onChange={handleFormChange}
                className="w-full p-2 border rounded h-20"
              ></textarea>
            </div>
            
            {/* Benefits */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="block font-medium">Benefits (Optional)</label>
                <Button 
                  type="button" 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    if (!formData.benefits) {
                      setFormData(prev => ({...prev, benefits: ['']}));
                    } else {
                      addListItem('benefits');
                    }
                  }}
                >
                  Add
                </Button>
              </div>
              
              {formData.benefits && formData.benefits.map((item, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => handleListItemChange(index, 'benefits', e.target.value)}
                    className="flex-grow p-2 border rounded"
                  />
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm"
                    onClick={() => removeListItem(index, 'benefits')}
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
        
        {/* Job management table */}
        {!isAdding && jobs.length > 0 && (
          <div className="bg-white p-6 rounded-lg shadow-sm overflow-x-auto">
            <h3 className="text-xl font-semibold mb-4">Manage Existing Positions</h3>
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Posted</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {jobs.map((job) => (
                  <tr key={job.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">{job.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{job.location}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{job.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{job.postedDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex justify-end gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => handleEditJob(job)}
                        >
                          <FileEdit size={16} />
                        </Button>
                        <Button 
                          variant="destructive" 
                          size="sm" 
                          onClick={() => handleDeleteJob(job.id)}
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

// Create a LoginDialog component as a property of AdminPanel
AdminPanel.LoginDialog = ({ isOpen, setIsOpen, adminPassword, setAdminPassword, handleAdminLogin }) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleAdminLogin}>Login</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AdminPanel;