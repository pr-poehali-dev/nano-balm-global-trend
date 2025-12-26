import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

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

interface TestimonialsSectionProps {
  onConsultationClick: (productName: string) => void;
}

const TestimonialsSection = ({ onConsultationClick }: TestimonialsSectionProps) => {
  const [selectedCase, setSelectedCase] = useState<typeof beforeAfterCases[0] | null>(null);

  return (
    <>
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
                      onConsultationClick(selectedCase.product);
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
    </>
  );
};

export default TestimonialsSection;
