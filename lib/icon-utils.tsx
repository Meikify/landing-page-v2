import { 
  Shield, 
  Rocket, 
  TrendingUp, 
  Brain, 
  Users, 
  Target, 
  Cog, 
  Star 
} from 'lucide-react'
import type { IconName } from '@/types'

export const getIcon = (iconName: IconName, className: string = "w-16 h-16") => {
  const iconMap = {
    Shield: <Shield className={className} />,
    Rocket: <Rocket className={className} />,
    TrendingUp: <TrendingUp className={className} />,
    Brain: <Brain className={className} />,
    Users: <Users className={className} />,
    Target: <Target className={className} />,
    Cog: <Cog className={className} />,
    Star: <Star className={className} />,
  }
  
  return iconMap[iconName] || <Shield className={className} />
}