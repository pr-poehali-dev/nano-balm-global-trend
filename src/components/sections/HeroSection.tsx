import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onConsultationClick: () => void;
}

const HeroSection = ({ onConsultationClick }: HeroSectionProps) => {
  return (
    <>
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                <p className="text-sm font-semibold text-primary">Восстановление на клеточном уровне</p>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight text-foreground">
                Нано-бальзамы для вашего здоровья
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Уникальная формула с наночастицами для глубокого проникновения и восстановления организма. 
                Натуральные компоненты, научный подход, проверенная эффективность.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={onConsultationClick} className="gap-2">
                  <Icon name="MessageCircle" size={20} />
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" onClick={() => {
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Каталог продуктов
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/0fb2fa43-a518-4a7c-87b3-d9010469328f/files/6defe108-323a-45a7-b40d-558186ca6e92.jpg"
                alt="Global Trend Nano Balm"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3 p-6 rounded-2xl bg-background border border-border hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Sparkles" size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Нано-технология</h3>
              <p className="text-muted-foreground">Проникновение на клеточном уровне для максимального эффекта</p>
            </div>
            <div className="text-center space-y-3 p-6 rounded-2xl bg-background border border-border hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Leaf" size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold">100% натуральные</h3>
              <p className="text-muted-foreground">Только природные компоненты без химических добавок</p>
            </div>
            <div className="text-center space-y-3 p-6 rounded-2xl bg-background border border-border hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Award" size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Научно доказано</h3>
              <p className="text-muted-foreground">Клинические исследования подтверждают эффективность</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
