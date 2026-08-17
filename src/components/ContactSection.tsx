import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Send, Loader2, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address').max(255),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(20, 'Message must be at least 20 characters').max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const subjectOptions = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'collaboration', label: 'Collaboration Opportunity' },
  { value: 'job', label: 'Job Opportunity' },
  { value: 'consulting', label: 'Consulting Request' },
  { value: 'speaking', label: 'Speaking Engagement' },
  { value: 'other', label: 'Other' },
];

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hegdeprasanna11@gmail.com',
    href: 'mailto:hegdeprasanna11@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 7899906651',
    href: 'tel:+917899906651',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bengaluru, India',
    href: null,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/hegdeprasanna/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'PrasannaHegde11',
    href: 'https://github.com/PrasannaHegde11',
  },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const validateField = (field: keyof ContactFormData, value: string) => {
    try {
      contactSchema.shape[field].parse(value);
      setErrors((prev) => ({ ...prev, [field]: undefined }));
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors((prev) => ({ ...prev, [field]: error.errors[0].message }));
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      contactSchema.parse(formData);
      setIsSubmitting(true);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '707c8ed1-7883-402e-83f1-eb8f5067d277',
          name: formData.name,
          email: formData.email,
          subject: `Portfolio Contact [${formData.subject}]: ${formData.name}`,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: 'Message sent!',
          description: "Thanks for reaching out! I'll respond within 24 hours.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(newErrors);
      } else if (!(error instanceof z.ZodError)) {
        toast({
          title: 'Something went wrong',
          description: 'Please try again or email me directly at hegdeprasanna11@gmail.com',
          variant: 'destructive',
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Let's Connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-subtitle"
        >
          Let's discuss how we can build impactful products together
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                onBlur={(e) => validateField('name', e.target.value)}
                placeholder="Your name"
                className={errors.name ? 'border-destructive' : ''}
              />
              {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onBlur={(e) => validateField('email', e.target.value)}
                placeholder="your@email.com"
                className={errors.email ? 'border-destructive' : ''}
              />
              {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject *</Label>
              <Select
                value={formData.subject}
                onValueChange={(value) => {
                  setFormData({ ...formData, subject: value });
                  validateField('subject', value);
                }}
              >
                <SelectTrigger className={errors.subject ? 'border-destructive' : ''}>
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  {subjectOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.subject && <p className="text-sm text-destructive">{errors.subject}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onBlur={(e) => validateField('message', e.target.value)}
                placeholder="Tell me about your project, opportunity, or question..."
                rows={5}
                className={errors.message ? 'border-destructive' : ''}
              />
              {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-hover bg-card rounded-xl border border-border p-5 shadow-soft"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-medium text-foreground hover:text-accent transition-colors link-underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium text-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
