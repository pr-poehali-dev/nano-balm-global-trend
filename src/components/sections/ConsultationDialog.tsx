import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ConsultationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  formData: {
    name: string;
    phone: string;
    email: string;
    message: string;
    product: string;
    date: string;
    time: string;
  };
  onFormDataChange: (data: any) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const ConsultationDialog = ({ 
  open, 
  onOpenChange, 
  formData, 
  onFormDataChange, 
  onSubmit 
}: ConsultationDialogProps) => {
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">Записаться на консультацию</DialogTitle>
          <DialogDescription>
            Наш специалист свяжется с вами для подбора оптимального решения
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4 py-4">
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
              onChange={(e) => onFormDataChange({...formData, name: e.target.value})}
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
              onChange={(e) => onFormDataChange({...formData, phone: e.target.value})}
              placeholder="+7 (999) 123-45-67"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => onFormDataChange({...formData, email: e.target.value})}
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
                  onChange={(e) => onFormDataChange({...formData, date: e.target.value})}
                  min={getMinDate()}
                  max={getMaxDate()}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Время</Label>
                <select
                  id="time"
                  value={formData.time}
                  onChange={(e) => onFormDataChange({...formData, time: e.target.value})}
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
              onChange={(e) => onFormDataChange({...formData, message: e.target.value})}
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
  );
};

export default ConsultationDialog;
