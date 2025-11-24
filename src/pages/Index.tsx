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
          title: "Заявка отправлена!",
          description: "Мы свяжемся с вами в ближайшее время для подтверждения тест-драйва.",
        });

        setFormData({
          name: '',
          phone: '',
          email: '',
          model: 'Lexus ES'
        });
      } else {
        toast({
          title: "Ошибка",
          description: "Не удалось отправить заявку. Попробуйте позже.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже.",
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
              <a href="#about" className="hover:text-primary transition-colors">О НАС</a>
              <a href="#features" className="hover:text-primary transition-colors">ПРЕИМУЩЕСТВА</a>
              <a href="#test-drive" className="hover:text-primary transition-colors">ТЕСТ-ДРАЙВ</a>
              <a href="#contact" className="hover:text-primary transition-colors">КОНТАКТЫ</a>
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
                Роскошь в каждой детали
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block text-secondary">LEXUS</span>
                <span className="block text-primary mt-2">Новая эра</span>
                <span className="block text-secondary mt-2">комфорта</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Испытайте идеальное сочетание японской инженерии, инновационных технологий и безупречного стиля.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={scrollToForm} size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                  Записаться на тест-драйв
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                  Узнать больше
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
              Почему выбирают Lexus
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Четыре ключевых преимущества, которые делают каждую поездку незабываемой
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-primary group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon name="Car" size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary">1. Премиальный дизайн</h3>
              <p className="text-muted-foreground leading-relaxed">
                Безупречные линии кузова и инновационный дизайн интерьера создают атмосферу истинной роскоши. Каждая деталь продумана до мелочей.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-primary group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon name="Sparkles" size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary">2. Инновации</h3>
              <p className="text-muted-foreground leading-relaxed">
                Передовые технологии помощи водителю, гибридные силовые установки и интеллектуальные системы безопасности последнего поколения.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-primary group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary">3. Надежность</h3>
              <p className="text-muted-foreground leading-relaxed">
                Легендарное японское качество и надежность. Строгий контроль производства гарантирует безупречную работу каждого компонента.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-primary group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon name="Heart" size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary">4. Комфорт</h3>
              <p className="text-muted-foreground leading-relaxed">
                Превосходная шумоизоляция, анатомические сидения с климат-контролем и адаптивная подвеска для максимального удовольствия от вождения.
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
                Запишитесь на тест-драйв
              </h2>
              <p className="text-lg text-white/90">
                Ощутите уникальный опыт вождения Lexus. Заполните форму, и мы свяжемся с вами для подтверждения записи.
              </p>
            </div>

            <Card id="test-drive-form" className="p-8 md:p-12 bg-white/95 backdrop-blur-sm shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base font-semibold">Имя *</Label>
                    <Input
                      id="name"
                      placeholder="Иван Петров"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base font-semibold">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
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
                  <Label htmlFor="model" className="text-base font-semibold">Модель для тест-драйва</Label>
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
                  Отправить заявку
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
                Японское качество и инновации в каждом автомобиле.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Навигация</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#home" className="hover:text-primary transition-colors">Главная</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#features" className="hover:text-primary transition-colors">Преимущества</a></li>
                <li><a href="#test-drive" className="hover:text-primary transition-colors">Тест-драйв</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Контакты</h4>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@lexus.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>Москва, ул. Примерная, 1</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Социальные сети</h4>
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
            <p>&copy; 2024 Lexus. Все права защищены.</p>
          </div>
        </div>

        <div className="fixed bottom-8 right-8 z-50">
          <Button
            onClick={scrollToForm}
            size="lg"
            className="shadow-2xl hover:scale-110 transition-transform rounded-full px-6"
          >
            Тест-драйв
            <Icon name="Calendar" className="ml-2" size={20} />
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;