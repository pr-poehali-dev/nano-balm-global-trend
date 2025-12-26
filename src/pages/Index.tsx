import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const products = [
  {
    id: 1,
    name: 'Perfecto Lux',
    category: 'Комплексное восстановление',
    description: 'Идеальный баланс для ежедневной поддержки организма на клеточном уровне',
    benefits: ['Укрепление иммунитета', 'Повышение энергии', 'Антиоксидантная защита'],
    volume: '50 мл',
    price: '3 990 ₽'
  },
  {
    id: 2,
    name: 'Vitality Lux',
    category: 'Энергия и тонус',
    description: 'Активация жизненных сил и восстановление энергетического баланса',
    benefits: ['Борьба с усталостью', 'Улучшение метаболизма', 'Повышение выносливости'],
    volume: '50 мл',
    price: '4 290 ₽'
  },
  {
    id: 3,
    name: 'Smart Lux',
    category: 'Когнитивные функции',
    description: 'Поддержка мозговой активности, памяти и концентрации внимания',
    benefits: ['Улучшение памяти', 'Повышение концентрации', 'Ясность мышления'],
    volume: '50 мл',
    price: '4 590 ₽'
  },
  {
    id: 4,
    name: 'Harmony Lux',
    category: 'Эмоциональный баланс',
    description: 'Гармонизация нервной системы и поддержка эмоционального здоровья',
    benefits: ['Снижение стресса', 'Улучшение сна', 'Эмоциональная стабильность'],
    volume: '50 мл',
    price: '4 390 ₽'
  },
  {
    id: 5,
    name: 'Pavlov Spring',
    category: 'Детокс и очищение',
    description: 'Глубокое очищение организма и активация процессов регенерации',
    benefits: ['Вывод токсинов', 'Очищение клеток', 'Омоложение организма'],
    volume: '50 мл',
    price: '4 190 ₽'
  }
];

const Index = () => {
  const { toast } = useToast();
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    product: ''
  });

  const handleConsultation = (productName?: string) => {
    setFormData({ ...formData, product: productName || '' });
    setConsultationOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Наш специалист свяжется с вами в ближайшее время.',
    });
    setConsultationOpen(false);
    setFormData({ name: '', phone: '', email: '', message: '', product: '' });
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
                <Button size="lg" onClick={() => handleConsultation()} className="gap-2">
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

      <section id="products" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Наша линейка продуктов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Каждый нано-бальзам создан для решения конкретных задач восстановления здоровья
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card 
                key={product.id} 
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon name="Sparkles" size={24} className="text-primary" />
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent/20 text-accent-foreground">
                      {product.volume}
                    </span>
                  </div>
                  <CardTitle className="text-2xl mb-1">{product.name}</CardTitle>
                  <CardDescription className="text-sm font-medium text-primary">
                    {product.category}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                  <div className="space-y-2">
                    {product.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-2xl font-bold text-foreground">{product.price}</span>
                    <Button 
                      size="sm" 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleConsultation(product.name);
                      }}
                      className="gap-2"
                    >
                      <Icon name="MessageCircle" size={16} />
                      Консультация
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl">{selectedProduct.name}</DialogTitle>
                <DialogDescription className="text-base text-primary font-medium">
                  {selectedProduct.category}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6 py-4">
                <p className="text-lg">{selectedProduct.description}</p>
                <div>
                  <h4 className="font-semibold mb-3 text-lg">Эффекты применения:</h4>
                  <div className="space-y-2">
                    {selectedProduct.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <p className="text-sm text-muted-foreground">Объём</p>
                    <p className="text-lg font-semibold">{selectedProduct.volume}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Цена</p>
                    <p className="text-3xl font-bold">{selectedProduct.price}</p>
                  </div>
                </div>
                <Button 
                  size="lg" 
                  className="w-full gap-2"
                  onClick={() => {
                    setSelectedProduct(null);
                    handleConsultation(selectedProduct.name);
                  }}
                >
                  <Icon name="MessageCircle" size={20} />
                  Получить консультацию по применению
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={consultationOpen} onOpenChange={setConsultationOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl">Записаться на консультацию</DialogTitle>
            <DialogDescription>
              Наш специалист свяжется с вами для подбора оптимального решения
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            {formData.product && (
              <div className="p-3 bg-primary/10 rounded-lg">
                <p className="text-sm text-muted-foreground">Интересующий продукт:</p>
                <p className="font-semibold">{formData.product}</p>
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="name">Ваше имя *</Label>
              <Input 
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Иван Иванов"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Телефон *</Label>
              <Input 
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="+7 (999) 123-45-67"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="ivan@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Комментарий</Label>
              <Textarea 
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Опишите ваши пожелания или вопросы..."
                rows={4}
              />
            </div>
            <Button type="submit" size="lg" className="w-full gap-2">
              <Icon name="Send" size={18} />
              Отправить заявку
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
