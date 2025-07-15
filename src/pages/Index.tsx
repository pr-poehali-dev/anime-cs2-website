import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Icon from '@/components/ui/icon'

const Index = () => {
  const playerStats = [
    { name: "s1mple", rating: "1.24", kills: "2,847", rank: "Global Elite", avatar: "🇺🇦" },
    { name: "ZywOo", rating: "1.28", kills: "2,134", rank: "Global Elite", avatar: "🇫🇷" },
    { name: "sh1ro", rating: "1.19", kills: "1,923", rank: "Global Elite", avatar: "🇷🇺" },
    { name: "NiKo", rating: "1.16", kills: "3,421", rank: "Global Elite", avatar: "🇧🇦" }
  ]

  const recentMatches = [
    { team1: "NAVI", team2: "G2", score: "16-14", map: "Mirage", time: "2 часа назад" },
    { team1: "FaZe", team2: "Astralis", score: "16-11", map: "Inferno", time: "4 часа назад" },
    { team1: "Vitality", team2: "MOUZ", score: "16-8", map: "Dust2", time: "6 часов назад" }
  ]

  const popularSkins = [
    { name: "AK-47 | Redline", price: "₽2,340", wear: "Field-Tested", rarity: "legendary" },
    { name: "AWP | Dragon Lore", price: "₽45,000", wear: "Factory New", rarity: "covert" },
    { name: "M4A4 | Howl", price: "₽18,500", wear: "Minimal Wear", rarity: "contraband" },
    { name: "Karambit | Fade", price: "₽35,700", wear: "Factory New", rarity: "covert" }
  ]

  return (
    <div className="min-h-screen bg-gaming-darker text-white">
      {/* Header */}
      <header className="gaming-gradient py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="anime-heading text-2xl font-bold">CS2 ARENA</div>
            <Badge variant="secondary" className="bg-gaming-dark text-white">
              🔥 LIVE
            </Badge>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Button variant="ghost" className="text-white hover:bg-white/20">
              <Icon name="Home" size={16} className="mr-2" />
              Главная
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/20">
              <Icon name="ShoppingBag" size={16} className="mr-2" />
              Магазин
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/20">
              <Icon name="Trophy" size={16} className="mr-2" />
              Рейтинги
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/20">
              <Icon name="MessageSquare" size={16} className="mr-2" />
              Контакты
            </Button>
          </nav>
          <Button className="bg-white text-gaming-orange hover:bg-white/90">
            <Icon name="LogIn" size={16} className="mr-2" />
            Steam Вход
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gaming-darker via-gaming-dark to-gaming-darker opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('/img/5fb46e78-653d-4234-b6d0-2d6d0ca454b7.jpg')`
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="anime-heading text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-gaming-orange to-yellow-400 bg-clip-text text-transparent">
            CS2 ARENA
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gaming-light max-w-3xl mx-auto">
            Твой путь к вершине киберспорта начинается здесь! 
            Статистика, турниры, скины и многое другое.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gaming-gradient hover-scale glow-effect text-white">
              <Icon name="Play" size={20} className="mr-2" />
              Начать играть
            </Button>
            <Button size="lg" variant="outline" className="border-gaming-orange text-gaming-orange hover:bg-gaming-orange hover:text-white">
              <Icon name="BarChart3" size={20} className="mr-2" />
              Посмотреть статистику
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <Tabs defaultValue="matches" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-gaming-dark">
            <TabsTrigger value="matches" className="data-[state=active]:bg-gaming-orange">
              <Icon name="Zap" size={16} className="mr-2" />
              Матчи
            </TabsTrigger>
            <TabsTrigger value="shop" className="data-[state=active]:bg-gaming-orange">
              <Icon name="ShoppingBag" size={16} className="mr-2" />
              Магазин
            </TabsTrigger>
            <TabsTrigger value="ratings" className="data-[state=active]:bg-gaming-orange">
              <Icon name="TrendingUp" size={16} className="mr-2" />
              Рейтинги
            </TabsTrigger>
            <TabsTrigger value="community" className="data-[state=active]:bg-gaming-orange">
              <Icon name="Users" size={16} className="mr-2" />
              Сообщество
            </TabsTrigger>
          </TabsList>

          <TabsContent value="matches" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 bg-gaming-dark border-gaming-orange/20">
                <CardHeader>
                  <CardTitle className="text-gaming-orange flex items-center">
                    <Icon name="Zap" size={20} className="mr-2" />
                    Последние матчи
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentMatches.map((match, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gaming-darker rounded-lg hover-scale">
                        <div className="flex items-center space-x-4">
                          <Badge variant="secondary" className="bg-gaming-orange text-white">
                            LIVE
                          </Badge>
                          <span className="font-semibold">{match.team1} vs {match.team2}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-gaming-orange font-bold">{match.score}</div>
                          <div className="text-sm text-gaming-light">{match.map} • {match.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gaming-dark border-gaming-orange/20">
                <CardHeader>
                  <CardTitle className="text-gaming-orange flex items-center">
                    <Icon name="Trophy" size={20} className="mr-2" />
                    Топ игроки
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {playerStats.slice(0, 4).map((player, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gaming-darker rounded-lg hover-scale">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{player.avatar}</span>
                          <div>
                            <div className="font-semibold text-white">{player.name}</div>
                            <div className="text-sm text-gaming-light">Rating: {player.rating}</div>
                          </div>
                        </div>
                        <Badge className="bg-gaming-orange text-white">
                          #{index + 1}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="shop" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularSkins.map((skin, index) => (
                <Card key={index} className="bg-gaming-dark border-gaming-orange/20 hover-scale glow-effect">
                  <CardHeader className="pb-2">
                    <div className="w-full h-32 bg-gaming-darker rounded-lg flex items-center justify-center">
                      <Icon name="Crosshair" size={48} className="text-gaming-orange" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-sm text-white mb-2">{skin.name}</CardTitle>
                    <CardDescription className="text-gaming-light mb-3">
                      {skin.wear}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <span className="text-gaming-orange font-bold">{skin.price}</span>
                      <Badge 
                        variant="secondary" 
                        className={`${
                          skin.rarity === 'covert' ? 'bg-red-600' : 
                          skin.rarity === 'contraband' ? 'bg-yellow-600' :
                          'bg-purple-600'
                        } text-white`}
                      >
                        {skin.rarity}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ratings" className="mt-8">
            <Card className="bg-gaming-dark border-gaming-orange/20">
              <CardHeader>
                <CardTitle className="text-gaming-orange flex items-center">
                  <Icon name="TrendingUp" size={20} className="mr-2" />
                  Рейтинг игроков
                </CardTitle>
                <CardDescription className="text-gaming-light">
                  Топ игроки по статистике за последний месяц
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {playerStats.map((player, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gaming-darker rounded-lg hover-scale">
                      <div className="flex items-center space-x-4">
                        <Badge className="bg-gaming-orange text-white w-8 h-8 rounded-full flex items-center justify-center">
                          {index + 1}
                        </Badge>
                        <span className="text-3xl">{player.avatar}</span>
                        <div>
                          <div className="font-semibold text-white text-lg">{player.name}</div>
                          <div className="text-gaming-light">{player.rank}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-gaming-orange font-bold text-lg">Rating: {player.rating}</div>
                        <div className="text-gaming-light">{player.kills} киллов</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="community" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gaming-dark border-gaming-orange/20">
                <CardHeader>
                  <CardTitle className="text-gaming-orange flex items-center">
                    <Icon name="MessageSquare" size={20} className="mr-2" />
                    Телеграм канал
                  </CardTitle>
                  <CardDescription className="text-gaming-light">
                    Присоединяйтесь к нашему сообществу
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gaming-light mb-4">
                    🚀 Новости, турниры, розыгрыши скинов и многое другое!
                  </p>
                  <Button className="gaming-gradient hover-scale glow-effect w-full">
                    <Icon name="Send" size={16} className="mr-2" />
                    Подписаться на канал
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gaming-dark border-gaming-orange/20">
                <CardHeader>
                  <CardTitle className="text-gaming-orange flex items-center">
                    <Icon name="Users" size={20} className="mr-2" />
                    Контакты
                  </CardTitle>
                  <CardDescription className="text-gaming-light">
                    Связаться с администрацией
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full border-gaming-orange text-gaming-orange hover:bg-gaming-orange hover:text-white">
                      <Icon name="Mail" size={16} className="mr-2" />
                      Email: admin@cs2arena.ru
                    </Button>
                    <Button variant="outline" className="w-full border-gaming-orange text-gaming-orange hover:bg-gaming-orange hover:text-white">
                      <Icon name="MessageCircle" size={16} className="mr-2" />
                      Discord: CS2Arena#1337
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="dark-gradient py-12 px-6 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="anime-heading text-3xl font-bold text-gaming-orange mb-4">
            CS2 ARENA
          </div>
          <p className="text-gaming-light mb-6">
            Твоя арена для киберспортивных побед! 🎮
          </p>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" className="text-gaming-light hover:text-gaming-orange">
              <Icon name="Users" size={16} className="mr-2" />
              Сообщество
            </Button>
            <Button variant="ghost" className="text-gaming-light hover:text-gaming-orange">
              <Icon name="Shield" size={16} className="mr-2" />
              Правила
            </Button>
            <Button variant="ghost" className="text-gaming-light hover:text-gaming-orange">
              <Icon name="HelpCircle" size={16} className="mr-2" />
              Поддержка
            </Button>
          </div>
          <div className="mt-8 text-sm text-gaming-light">
            © 2024 CS2 Arena. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index