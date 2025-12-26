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

const testimonials = [
  {
    id: 1,
    name: 'Елена Соколова',
    age: 42,
    product: 'Harmony Lux',
    rating: 5,
    text: 'После месяца применения Harmony Lux полностью нормализовался сон. Раньше просыпалась по 3-4 раза за ночь, сейчас сплю как младенец. Стала намного спокойнее реагировать на стрессовые ситуации на работе.',
    result: 'Качество сна улучшилось на 90%',
    period: '1 месяц применения'
  },
  {
    id: 2,
    name: 'Дмитрий Волков',
    age: 35,
    product: 'Vitality Lux',
    rating: 5,
    text: 'Работаю в IT, постоянно чувствовал упадок сил к обеду. После курса Vitality Lux энергия держится весь день. Стал заниматься спортом по вечерам, хотя раньше не было сил даже дойти до спортзала.',
    result: 'Уровень энергии +70%',
    period: '6 недель применения'
  },
  {
    id: 3,
    name: 'Ирина Петрова',
    age: 55,
    product: 'Smart Lux',
    rating: 5,
    text: 'Начала замечать проблемы с памятью — забывала имена, где что положила. Smart Lux вернул мне ясность ума! Теперь легко запоминаю информацию, быстрее решаю рабочие задачи.',
    result: 'Память и концентрация улучшились',
    period: '2 месяца применения'
  },
  {
    id: 4,
    name: 'Александр Морозов',
    age: 48,
    product: 'Pavlov Spring',
    rating: 5,
    text: 'Прошёл детокс-курс с Pavlov Spring. Ушла тяжесть в теле, улучшилось пищеварение, кожа стала чище. Чувствую себя обновлённым, будто скинул 10 лет!',
    result: 'Полное обновление организма',
    period: '3 недели применения'
  },
  {
    id: 5,
    name: 'Мария Новикова',
    age: 39,
    product: 'Perfecto Lux',
    rating: 5,
    text: 'Использую Perfecto Lux для профилактики. За полгода ни разу не болела, хотя раньше простуды были частыми гостями. Ногти и волосы стали крепче, общее самочувствие отличное!',
    result: 'Иммунитет укрепился, 0 болезней за полгода',
    period: '6 месяцев применения'
  },
  {
    id: 6,
    name: 'Сергей Лебедев',
    age: 51,
    product: 'Harmony Lux',
    rating: 5,
    text: 'Постоянное напряжение из-за бизнеса привело к проблемам с давлением. Harmony Lux помог стабилизировать состояние, научился лучше справляться с эмоциями. Давление пришло в норму.',
    result: 'Давление нормализовалось',
    period: '2 месяца применения'
  }
];

const beforeAfterCases = [
  {
    id: 1,
    name: 'Елена, 42 года',
    product: 'Harmony Lux',
    problem: 'Хроническая бессонница и стресс',
    result: 'Полное восстановление сна и эмоционального баланса',
    duration: '4 недели',
    image: 'https://cdn.poehali.dev/projects/0fb2fa43-a518-4a7c-87b3-d9010469328f/files/44775f2e-4feb-431b-8ba7-5eaffe847f49.jpg',
    metrics: [
      { label: 'Качество сна', before: '3/10', after: '9/10' },
      { label: 'Уровень стресса', before: '8/10', after: '2/10' },
      { label: 'Общее самочувствие', before: '4/10', after: '9/10' }
    ]
  },
  {
    id: 2,
    name: 'Дмитрий, 35 лет',
    product: 'Vitality Lux',
    problem: 'Постоянная усталость и низкая энергия',
    result: 'Прилив энергии, активный образ жизни',
    duration: '6 недель',
    image: 'https://cdn.poehali.dev/projects/0fb2fa43-a518-4a7c-87b3-d9010469328f/files/113d3379-be84-452b-ab2b-bd5586760bdc.jpg',
    metrics: [
      { label: 'Уровень энергии', before: '3/10', after: '9/10' },
      { label: 'Выносливость', before: '4/10', after: '8/10' },
      { label: 'Продуктивность', before: '5/10', after: '9/10' }
    ]
  },
  {
    id: 3,
    name: 'Ирина, 55 лет',
    product: 'Smart Lux',
    problem: 'Ухудшение памяти и концентрации',
    result: 'Восстановление когнитивных функций',
    duration: '8 недель',
    image: 'https://cdn.poehali.dev/projects/0fb2fa43-a518-4a7c-87b3-d9010469328f/files/8d094b4f-c667-4f03-b308-13d1755a4d8c.jpg',
    metrics: [
      { label: 'Память', before: '4/10', after: '8/10' },
      { label: 'Концентрация', before: '3/10', after: '9/10' },
      { label: 'Ясность мышления', before: '4/10', after: '9/10' }
    ]
  }
];

const Index = () => {
  const { toast } = useToast();
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState<typeof beforeAfterCases[0] | null>(null);
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

  const getAvailableTimes = () => {
    return [
      '09:00', '10:00', '11:00', '12:00', 
      '14:00', '15:00', '16:00', '17:00', '18:00'
    ];
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    return maxDate.toISOString().split('T')[0];
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

      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Реальные результаты До/После</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Документированные кейсы восстановления здоровья наших клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beforeAfterCases.map((caseItem) => (
              <Card 
                key={caseItem.id} 
                className="group hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
                onClick={() => setSelectedCase(caseItem)}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={caseItem.image} 
                    alt={`${caseItem.name} - результат`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {caseItem.duration}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{caseItem.name}</CardTitle>
                  <CardDescription className="text-sm font-medium text-primary">
                    {caseItem.product}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Icon name="AlertCircle" size={16} className="text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground">Проблема:</p>
                        <p className="text-sm font-medium">{caseItem.problem}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="CheckCircle" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground">Результат:</p>
                        <p className="text-sm font-medium text-primary">{caseItem.result}</p>
                      </div>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCase(caseItem);
                    }}
                  >
                    Посмотреть подробности
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Отзывы наших клиентов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Реальные истории людей, которые восстановили своё здоровье с помощью нано-бальзамов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <CardTitle className="text-xl mb-1">{testimonial.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {testimonial.age} лет · {testimonial.product}
                      </CardDescription>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="pt-3 border-t border-border space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon name="TrendingUp" size={16} className="text-primary flex-shrink-0" />
                      <span className="text-sm font-semibold text-primary">{testimonial.result}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} className="text-muted-foreground flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">{testimonial.period}</span>
                    </div>
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

            <div className="p-4 bg-muted/50 rounded-lg space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Icon name="Calendar" size={18} className="text-primary" />
                <span>Выберите удобное время консультации</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="date">Дата</Label>
                  <Input 
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    min={getMinDate()}
                    max={getMaxDate()}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Время</Label>
                  <select
                    id="time"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Выберите</option>
                    {getAvailableTimes().map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                * Если не выберете время, наш специалист сам свяжется с вами
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Комментарий</Label>
              <Textarea 
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Опишите ваши пожелания или вопросы..."
                rows={3}
              />
            </div>
            <Button type="submit" size="lg" className="w-full gap-2">
              <Icon name="Send" size={18} />
              Записаться на консультацию
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={!!selectedCase} onOpenChange={() => setSelectedCase(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedCase && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl">{selectedCase.name}</DialogTitle>
                <DialogDescription className="text-base text-primary font-medium">
                  {selectedCase.product} • {selectedCase.duration}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6 py-4">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={selectedCase.image} 
                    alt={`${selectedCase.name} - результат применения`}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="bg-destructive/5 border-destructive/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Icon name="AlertCircle" size={20} className="text-destructive" />
                        До применения
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-medium">{selectedCase.problem}</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary/5 border-primary/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Icon name="CheckCircle" size={20} className="text-primary" />
                        После применения
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-medium text-primary">{selectedCase.result}</p>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-lg flex items-center gap-2">
                    <Icon name="BarChart3" size={20} className="text-primary" />
                    Показатели улучшения
                  </h4>
                  <div className="space-y-4">
                    {selectedCase.metrics.map((metric, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{metric.label}</span>
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-destructive">{metric.before}</span>
                            <Icon name="ArrowRight" size={16} className="text-muted-foreground" />
                            <span className="text-sm text-primary font-bold">{metric.after}</span>
                          </div>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-destructive/30 via-yellow-500/50 to-primary transition-all duration-500"
                            style={{ width: `${(parseInt(metric.after) / 10) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Button 
                    size="lg" 
                    className="w-full gap-2"
                    onClick={() => {
                      setSelectedCase(null);
                      handleConsultation(selectedCase.product);
                    }}
                  >
                    <Icon name="Calendar" size={20} />
                    Записаться на консультацию по {selectedCase.product}
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;