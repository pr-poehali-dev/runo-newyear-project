import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const rooms = [
    {
      title: "Стандарт",
      price: "4 500",
      description: "Уютный номер с современным ремонтом",
      features: ["Душевая кабина", "ЖК-телевизор", "Wi-Fi", "Холодильник"]
    },
    {
      title: "Стандарт плюс",
      price: "5 200",
      description: "Просторный номер с улучшенной мебелью",
      features: ["Душевая кабина", "ЖК-телевизор", "Wi-Fi", "Холодильник", "Сплит-система"]
    },
    {
      title: "Комфорт",
      price: "6 100",
      description: "Комфортабельный номер с прекрасным видом",
      features: ["Душевая кабина", "ЖК-телевизор", "Wi-Fi", "Холодильник", "Сплит-система", "Электрочайник"]
    },
    {
      title: "Люкс",
      price: "7 800",
      description: "Роскошный номер с видом на горы",
      features: ["Душевая кабина", "ЖК-телевизор", "Wi-Fi", "Холодильник", "Сплит-система", "Электрочайник", "Фен", "Набор посуды"]
    }
  ];

  const faqs = [
    {
      question: "Будет ли праздничный банкет на Новый год в санатории Руно?",
      answer: "Да, в новогоднюю ночь для всех отдыхающих организуется праздничный банкет с изысканными блюдами, живой музыкой и развлекательной программой."
    },
    {
      question: "Можно ли совместить участие в новогодней программе с лечением и оздоровлением?",
      answer: "Конечно! Наши программы специально разработаны так, чтобы вы могли наслаждаться праздником и получать необходимые оздоровительные процедуры. Расписание составляется индивидуально."
    },
    {
      question: "Входит ли проживание и лечение в стоимость новогоднего пакета?",
      answer: "Да, указанная стоимость включает проживание в номере выбранной категории, четырёхразовое лечебное питание, базовую программу лечения, доступ к Wi-Fi и участие в развлекательных мероприятиях."
    },
    {
      question: "Какие праздничные мероприятия проходят в санатории в новогоднюю ночь?",
      answer: "В программу входят: торжественный ужин, живая музыка, концертная программа, конкурсы и розыгрыши призов, а также незабываемый фейерверк в полночь."
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-primary/10">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" className="text-secondary" size={28} />
            <span className="font-bold text-2xl text-primary">Санаторий Руно</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#hero" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
            <a href="#program" className="text-sm font-medium hover:text-primary transition-colors">Программа</a>
            <a href="#rooms" className="text-sm font-medium hover:text-primary transition-colors">Номера</a>
            <a href="#treatment" className="text-sm font-medium hover:text-primary transition-colors">Лечение</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О санатории</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button asChild className="hidden md:inline-flex">
            <a href="#contact">Забронировать</a>
          </Button>
        </nav>
      </header>

      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/a0545465-70a8-4bca-9329-6c3f1fd68f24/files/706540b8-58d6-4d6f-b539-a6d8a0ca1c94.jpg" 
            alt="Санаторий Руно зимой"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/80" />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center text-white animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/90 backdrop-blur-sm rounded-full">
            <span className="text-primary font-semibold">✨ Новый год 2026 в санатории</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
            Незабываемый Новый год
            <br />
            <span className="text-secondary">с лечением и праздником</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-lg">
            Погрузитесь в атмосферу Нового года: комфортный отдых, эффективное санаторно-курортное лечение и праздничная атмосфера
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-semibold text-lg px-8">
              <a href="#rooms">Выбрать номер</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/90 hover:bg-white text-primary border-2 border-white font-semibold text-lg px-8">
              <a href="#program">Программа</a>
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <Icon name="Bed" size={40} className="mx-auto mb-3 text-secondary" />
              <h3 className="font-semibold text-lg mb-2">Комфортный отдых</h3>
              <p className="text-sm text-white/90">Просторные номера с видом на горы Эльбрус и Машук</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <Icon name="Heart" size={40} className="mx-auto mb-3 text-secondary" />
              <h3 className="font-semibold text-lg mb-2">Лечение</h3>
              <p className="text-sm text-white/90">Современные методики оздоровления и восстановления</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <Icon name="PartyPopper" size={40} className="mx-auto mb-3 text-secondary" />
              <h3 className="font-semibold text-lg mb-2">Праздник</h3>
              <p className="text-sm text-white/90">Банкет, концерты и незабываемые фейерверки</p>
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="py-20 bg-gradient-to-b from-muted to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Новогодняя программа</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Насладитесь уникальным сочетанием отдыха, лечения и праздника
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Utensils" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Зимний банкет</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Праздничный новогодний стол с изысканными блюдами и напитками, живая музыка и атмосфера праздника
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Stethoscope" size={32} className="text-secondary" />
                </div>
                <CardTitle className="text-2xl">Оздоровление</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Профессиональные врачи, диагностика, лечебные процедуры и программы восстановления здоровья
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Music" size={32} className="text-accent" />
                </div>
                <CardTitle className="text-2xl">Развлечения</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Весёлые мероприятия, концерты, конкурсы, настольный теннис, бильярд и незабываемые фейерверки
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Snowflake" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Зимний отдых</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Прогулки по заснеженному парку, любование горными пейзажами и чистый целебный воздух
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Home" size={32} className="text-secondary" />
                </div>
                <CardTitle className="text-2xl">Всё для уюта</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Wi-Fi, сплит-система, ЖК-телевизор, холодильник, электрочайник в каждом номере
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Gift" size={32} className="text-accent" />
                </div>
                <CardTitle className="text-2xl">Новогодние услуги</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Четырёхразовое питание по системе заказного меню, лечебная физкультура, парковка
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="rooms" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Цены на новогодние праздники</h2>
            <p className="text-lg text-muted-foreground mb-2">с 29.12.2025 по 11.01.2026</p>
            <p className="text-sm text-muted-foreground">Цены указаны за одного человека за один день при 2-местном размещении</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {rooms.map((room, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-secondary hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="BedDouble" size={40} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{room.title}</CardTitle>
                  <CardDescription className="text-sm">{room.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <p className="text-4xl font-bold text-primary mb-1">от {room.price} ₽</p>
                    <p className="text-sm text-muted-foreground">за сутки</p>
                  </div>
                  <ul className="space-y-2">
                    {room.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-secondary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <a href="#contact">Выбрать</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary/30">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Что включено в путёвку</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Bed" size={24} className="text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Проживание</h4>
                      <p className="text-sm text-muted-foreground">В номере выбранной категории</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Utensils" size={24} className="text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Питание</h4>
                      <p className="text-sm text-muted-foreground">Четырёхразовое лечебное по системе заказного меню</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Stethoscope" size={24} className="text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Лечение</h4>
                      <p className="text-sm text-muted-foreground">Приёмы врачей, диагностика и процедуры</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Activity" size={24} className="text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">ЛФК</h4>
                      <p className="text-sm text-muted-foreground">Лечебная физкультура</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Wifi" size={24} className="text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Wi-Fi скоростной</h4>
                      <p className="text-sm text-muted-foreground">В номерах и холлах</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="PartyPopper" size={24} className="text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Досуг</h4>
                      <p className="text-sm text-muted-foreground">Мероприятия по программе</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Gamepad2" size={24} className="text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Развлечения</h4>
                      <p className="text-sm text-muted-foreground">Настольный теннис, бильярд</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Car" size={24} className="text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Парковка</h4>
                      <p className="text-sm text-muted-foreground">Место на парковке</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="treatment" className="py-20 bg-gradient-to-b from-muted to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Санаторно-курортное лечение</h2>
            <p className="text-lg text-muted-foreground">
              Новый год — отличное время обновить здоровье и зарядиться энергией в санатории Руно
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary/50 hover:shadow-xl transition-all">
              <CardHeader>
                <Icon name="Heart" size={48} className="text-accent mb-4" />
                <CardTitle className="text-2xl">Базовая программа</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary shrink-0 mt-1" />
                  <p className="text-muted-foreground">Консультации врачей-специалистов</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary shrink-0 mt-1" />
                  <p className="text-muted-foreground">Диагностические исследования</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary shrink-0 mt-1" />
                  <p className="text-muted-foreground">Физиотерапевтические процедуры</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary shrink-0 mt-1" />
                  <p className="text-muted-foreground">Лечебная физкультура</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary shrink-0 mt-1" />
                  <p className="text-muted-foreground">Массаж и водолечение</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-xl transition-all">
              <CardHeader>
                <Icon name="Sparkles" size={48} className="text-secondary mb-4" />
                <CardTitle className="text-2xl">Индивидуальный подход</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary shrink-0 mt-1" />
                  <p className="text-muted-foreground">Программа составляется врачом</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary shrink-0 mt-1" />
                  <p className="text-muted-foreground">Учёт особенностей здоровья</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary shrink-0 mt-1" />
                  <p className="text-muted-foreground">Современное оборудование</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary shrink-0 mt-1" />
                  <p className="text-muted-foreground">Опытный медицинский персонал</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary shrink-0 mt-1" />
                  <p className="text-muted-foreground">Контроль результатов лечения</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">О санатории "Руно"</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Современный санаторий в центре Пятигорска с богатой историей
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div className="space-y-6">
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Building2" className="text-primary" size={28} />
                    Основной корпус
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    6-этажный корпус, оборудован пассажирским лифтом. Пр-кт Кирова, 28, рядом с "Цветником". Корпус "Каштана" в 250 метрах
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="MapPin" className="text-secondary" size={28} />
                    Инфраструктура
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Столовый зал для отдыхающих, приёмное отделение и отдел бронирования в основном корпусе. Всё необходимое в одном месте
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Star" className="text-accent" size={28} />
                    Удобства в номерах
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Душевые кабины, сплит-система, ЖК-телевизор, холодильник, Wi-Fi, электрочайник, фен, набор посуды
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://cdn.poehali.dev/projects/a0545465-70a8-4bca-9329-6c3f1fd68f24/files/706540b8-58d6-4d6f-b539-a6d8a0ca1c94.jpg" 
                    alt="Главный корпус"
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="p-3 bg-white">
                    <p className="text-sm font-semibold text-center">Главный корпус</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://cdn.poehali.dev/projects/a0545465-70a8-4bca-9329-6c3f1fd68f24/files/bf4b233e-2676-4c0d-b3f1-eabc49b70718.jpg" 
                    alt="Номер санатория"
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="p-3 bg-white">
                    <p className="text-sm font-semibold text-center">Номер санатория</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://cdn.poehali.dev/projects/a0545465-70a8-4bca-9329-6c3f1fd68f24/files/706540b8-58d6-4d6f-b539-a6d8a0ca1c94.jpg" 
                    alt="Холл и ресепшн"
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="p-3 bg-white">
                    <p className="text-sm font-semibold text-center">Холл и ресепшн</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://cdn.poehali.dev/projects/a0545465-70a8-4bca-9329-6c3f1fd68f24/files/52c94f37-53eb-43f7-9b7c-6cccfcd72fe6.jpg" 
                    alt="Столовая"
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="p-3 bg-white">
                    <p className="text-sm font-semibold text-center">Столовая</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-gradient-to-b from-muted to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Частые вопросы</h2>
              <p className="text-lg text-muted-foreground">
                Ответы на самые популярные вопросы о новогоднем отдыхе
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-2 rounded-xl px-6 bg-white hover:border-primary/50 transition-colors">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Контакты и бронирование</h2>
              <p className="text-lg text-muted-foreground">
                Свяжитесь с нами для бронирования или получения консультации
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <Icon name="Building2" className="text-primary" size={32} />
                      Филиал-санаторий "Руно"
                    </CardTitle>
                    <CardDescription>СХК "ДонАгроКурорт"</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" className="text-accent shrink-0 mt-1" size={24} />
                      <div>
                        <p className="font-semibold mb-1">Адрес</p>
                        <p className="text-muted-foreground">г. Пятигорск, пр-кт Кирова, 28</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Phone" className="text-accent shrink-0 mt-1" size={24} />
                      <div>
                        <p className="font-semibold mb-1">Телефоны</p>
                        <p className="text-muted-foreground">+7 (879) 339-02-66</p>
                        <p className="text-muted-foreground">+7 (879) 339-22-91</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Mail" className="text-accent shrink-0 mt-1" size={24} />
                      <div>
                        <p className="font-semibold mb-1">Email</p>
                        <p className="text-muted-foreground">runo@donagrok.ru</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary to-primary/80 text-white border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl">Мы в социальных сетях</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Следите за новостями и специальными предложениями</p>
                    <div className="flex gap-4">
                      <Button variant="secondary" size="icon" className="rounded-full">
                        <Icon name="Facebook" size={20} />
                      </Button>
                      <Button variant="secondary" size="icon" className="rounded-full">
                        <Icon name="Instagram" size={20} />
                      </Button>
                      <Button variant="secondary" size="icon" className="rounded-full">
                        <Icon name="Youtube" size={20} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl">Оставить заявку</CardTitle>
                  <CardDescription>Мы свяжемся с вами в ближайшее время</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Имя *</label>
                      <Input 
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон *</label>
                      <Input 
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input 
                        type="email"
                        placeholder="example@mail.ru"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Сообщение</label>
                      <Textarea 
                        placeholder="Укажите желаемые даты и количество гостей"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-lg">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sparkles" className="text-secondary" size={28} />
                <span className="font-bold text-xl">Санаторий Руно</span>
              </div>
              <p className="text-white/80 text-sm">
                Проведите незабываемый Новый год с лечением и праздничным банкетом в санатории Руно
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Быстрые ссылки</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#program" className="text-white/80 hover:text-white transition-colors">Новогодняя программа</a></li>
                <li><a href="#rooms" className="text-white/80 hover:text-white transition-colors">Номера и цены</a></li>
                <li><a href="#treatment" className="text-white/80 hover:text-white transition-colors">Лечение</a></li>
                <li><a href="#faq" className="text-white/80 hover:text-white transition-colors">Частые вопросы</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>г. Пятигорск, пр-кт Кирова, 28</li>
                <li>+7 (879) 339-02-66</li>
                <li>+7 (879) 339-22-91</li>
                <li>runo@donagrok.ru</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2025 Филиал-санаторий "Руно" СХК "ДонАгроКурорт". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
