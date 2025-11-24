import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    model: 'Lexus ES'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://functions.poehali.dev/50c9024a-d014-4c33-a317-179e9ef827b3', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: "Request Sent!",
          description: "We'll contact you shortly to confirm your test drive.",
        });

        setFormData({
          name: '',
          phone: '',
          email: '',
          model: 'Lexus ES'
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to submit request. Please try again later.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again later.",
        variant: "destructive"
      });
    }
  };

  const scrollToForm = () => {
    document.getElementById('test-drive-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 animate-fade-in">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold tracking-wider text-primary">
              LEXUS
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#home" className="hover:text-primary transition-colors">HOME</a>
              <a href="#about" className="hover:text-primary transition-colors">ABOUT</a>
              <a href="#features" className="hover:text-primary transition-colors">FEATURES</a>
              <a href="#test-drive" className="hover:text-primary transition-colors">TEST DRIVE</a>
              <a href="#contact" className="hover:text-primary transition-colors">CONTACT</a>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-primary/10 via-white to-secondary/5">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 transform skew-x-12"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary">
                Luxury in Every Detail
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block text-secondary">LEXUS</span>
                <span className="block text-primary mt-2">A New Era</span>
                <span className="block text-secondary mt-2">of Comfort</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Experience the perfect blend of Japanese engineering, innovative technology, and impeccable style.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={scrollToForm} size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                  Book Test Drive
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/328b54b1-b305-46cb-924c-e7fc6d429f48/files/5098bb68-0b76-44ad-8104-80da602369e0.jpg"
                alt="Lexus Premium Sedan"
                className="relative rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Why Choose Lexus
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four key advantages that make every journey unforgettable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-primary group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon name="Car" size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary">1. Premium Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Impeccable body lines and innovative interior design create an atmosphere of true luxury. Every detail is thoughtfully crafted.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-primary group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon name="Sparkles" size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary">2. Innovation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Advanced driver assistance technologies, hybrid powertrains, and next-generation intelligent safety systems.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-primary group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary">3. Reliability</h3>
              <p className="text-muted-foreground leading-relaxed">
                Legendary Japanese quality and reliability. Rigorous production control ensures flawless performance of every component.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-primary group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon name="Heart" size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary">4. Comfort</h3>
              <p className="text-muted-foreground leading-relaxed">
                Superior sound insulation, ergonomic seats with climate control, and adaptive suspension for maximum driving pleasure.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="test-drive" className="py-24 bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Book Your Test Drive
              </h2>
              <p className="text-lg text-white/90">
                Experience the unique Lexus driving experience. Fill out the form and we'll contact you to confirm your booking.
              </p>
            </div>

            <Card id="test-drive-form" className="p-8 md:p-12 bg-white/95 backdrop-blur-sm shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base font-semibold">Name *</Label>
                    <Input
                      id="name"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base font-semibold">Phone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-semibold">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="model" className="text-base font-semibold">Test Drive Model</Label>
                  <select
                    id="model"
                    value={formData.model}
                    onChange={(e) => setFormData({...formData, model: e.target.value})}
                    className="w-full h-12 px-3 rounded-md border border-input bg-background"
                  >
                    <option value="Lexus ES">Lexus ES</option>
                    <option value="Lexus RX">Lexus RX</option>
                    <option value="Lexus NX">Lexus NX</option>
                    <option value="Lexus UX">Lexus UX</option>
                    <option value="Lexus LS">Lexus LS</option>
                  </select>
                </div>

                <Button type="submit" size="lg" className="w-full h-14 text-lg hover:scale-105 transition-transform">
                  Submit Request
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">LEXUS</h3>
              <p className="text-white/80 leading-relaxed">
                Japanese quality and innovation in every vehicle.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Navigation</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#test-drive" className="hover:text-primary transition-colors">Test Drive</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Contact</h4>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@lexus.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>Los Angeles, CA 90001</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Social Media</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Youtube" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2024 Lexus. All rights reserved.</p>
          </div>
        </div>

        <div className="fixed bottom-8 right-8 z-50">
          <Button
            onClick={scrollToForm}
            size="lg"
            className="shadow-2xl hover:scale-110 transition-transform rounded-full px-6"
          >
            Test Drive
            <Icon name="Calendar" className="ml-2" size={20} />
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;