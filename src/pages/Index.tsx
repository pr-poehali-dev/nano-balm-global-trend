import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import HeroSection from '@/components/sections/HeroSection';
import ProductsSection from '@/components/sections/ProductsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ConsultationDialog from '@/components/sections/ConsultationDialog';

const Index = () => {
  const { toast } = useToast();
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    product: '',
    date: '',
    time: ''
  });

  const handleConsultation = (productName?: string) => {
    setFormData({ ...formData, product: productName || '' });
    setConsultationOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const appointmentDetails = formData.date && formData.time 
      ? `Время консультации: ${formData.date} в ${formData.time}`
      : 'Наш специалист свяжется с вами для согласования времени.';
    
    toast({
      title: 'Заявка отправлена!',
      description: appointmentDetails,
    });
    setConsultationOpen(false);
    setFormData({ name: '', phone: '', email: '', message: '', product: '', date: '', time: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Icon name="Leaf" size={20} className="text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Global Trend</h1>
              <p className="text-xs text-muted-foreground">Нано-бальзамы</p>
            </div>
          </div>
          <Button onClick={() => handleConsultation()} variant="default" className="gap-2">
            <Icon name="Calendar" size={18} />
            Консультация
          </Button>
        </div>
      </header>

      <HeroSection onConsultationClick={() => handleConsultation()} />

      <ProductsSection onConsultationClick={handleConsultation} />

      <TestimonialsSection onConsultationClick={handleConsultation} />

      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Получите консультацию специалиста
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Наши эксперты помогут подобрать оптимальный нано-бальзам для ваших целей 
            и расскажут о правильном применении продуктов
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => handleConsultation()}
            className="gap-2"
          >
            <Icon name="Calendar" size={20} />
            Записаться на консультацию
          </Button>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center text-sm text-muted-foreground">
          <p>© 2024 Global Trend. Нано-бальзамы для восстановления здоровья на клеточном уровне.</p>
        </div>
      </footer>

      <ConsultationDialog
        open={consultationOpen}
        onOpenChange={setConsultationOpen}
        formData={formData}
        onFormDataChange={setFormData}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Index;
