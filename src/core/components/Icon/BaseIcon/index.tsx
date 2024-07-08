import React, { Suspense, useMemo } from 'react'
import { SvgProps } from 'react-native-svg'
import { DefaultTheme, useTheme } from 'styled-components'
import { getColor } from 'core/helpers/color'
import { Colors } from 'core/styles/colors'
import { BaseContainer } from '../../Container/BaseContainer'

export type IconName =
  | 'arrow-left'
  | 'info-outline'
  | 'logo'
  | 'chevron-down'
  | 'check'
  | 'brown-backdrop'
  | 'brown-backdrop-circle'
  | 'purple-backdrop'
  | 'level-1-badge'
  | 'gear'
  | 'close'
  | 'jojo-rtl'
  | 'mic'
  | 'stop'
  | 'play'
  | 'processing'
  | 'feedback'
  | 'lock'
  | 'coin'
  | 'coin-backdrop'
  | 'feedback-bar'
  | 'restart'
  | 'home'
  | 'success'
  | 'fail'
  | 'ellipsis'

import Fail from 'core/assets/svgs/fail.svg'
import Success from 'core/assets/svgs/sucssess.svg'
import ArrowLeft from 'core/assets/svgs/arrow-left.svg'
import InfoOutline from 'core/assets/svgs/info-outline.svg'
import Logo from 'core/assets/svgs/logo.svg'
import ChevronDown from 'core/assets/svgs/chevron-down.svg'
import Check from 'core/assets/svgs/check.svg'
import BrownBackdrop from 'core/assets/svgs/brown-backdrop.svg'
import BrownBackdropCircle from 'core/assets/svgs/brown-backdrop-circle.svg'
import PurpleBackdropIcon from 'core/assets/svgs/purple-backdrop.svg'
import LevelOneBadge from 'core/assets/svgs/badges/level-1.svg'
import Gear from 'core/assets/svgs/gear.svg'
import Close from 'core/assets/svgs/close.svg'
import RTLJOJO from 'core/assets/svgs/jojo-rtl.svg'
import Microphone from 'core/assets/svgs/recorder/mic.svg'
import Stop from 'core/assets/svgs/recorder/stop.svg'
import Play from 'core/assets/svgs/recorder/play.svg'
import Processing from 'core/assets/svgs/recorder/processing.svg'
import Feedback from 'core/assets/svgs/feedback.svg'
import Lock from 'core/assets/svgs/lock.svg'
import Coin from 'core/assets/svgs/coin.svg'
import FeedbackBar from 'core/assets/svgs/feedback-bar.svg'
import CoinBackdrop from 'core/assets/svgs/coin-backdrop.svg'
import Restart from 'core/assets/svgs/restart.svg'
import Home from 'core/assets/svgs/home.svg'
import Ellipse from 'core/assets/svgs/ellipsis.svg'

export type IconProps = Omit<SvgProps, 'fill'> & {
  name: IconName
  fill?: keyof Colors | string
}

function register(theme: DefaultTheme, { fill, ...rest }: IconProps) {
  return {
    fill: getColor(theme, fill ?? 'text'),
    ...rest,
  }
}

export function BaseIcon(props: IconProps) {
  const theme = useTheme()

  const icon = useMemo(() => {
    switch (props.name) {
      case 'arrow-left':
        return <ArrowLeft {...register(theme, props)} />
      case 'info-outline':
        return <InfoOutline {...register(theme, props)} />
      case 'logo':
        return <Logo {...register(theme, props)} />
      case 'chevron-down':
        return <ChevronDown {...register(theme, props)} />
      case 'check':
        return <Check {...register(theme, props)} />
      case 'brown-backdrop':
        return <BrownBackdrop {...register(theme, props)} />
      case 'brown-backdrop-circle':
        return <BrownBackdropCircle {...register(theme, props)} />
      case 'level-1-badge':
        return <LevelOneBadge {...register(theme, props)} />
      case 'purple-backdrop':
        return <PurpleBackdropIcon {...register(theme, props)} />
      case 'gear':
        return <Gear {...register(theme, props)} />
      case 'close':
        return <Close {...register(theme, props)} />
      case 'jojo-rtl':
        return <RTLJOJO {...register(theme, props)} />
      case 'mic':
        return <Microphone {...register(theme, props)} />
      case 'stop':
        return <Stop {...register(theme, props)} />
      case 'play':
        return <Play {...register(theme, props)} />
      case 'processing':
        return <Processing {...register(theme, props)} />
      case 'feedback':
        return <Feedback {...register(theme, props)} />
      case 'lock':
        return <Lock {...register(theme, props)} />
      case 'coin':
        return <Coin {...register(theme, props)} />
      case 'feedback-bar':
        return <FeedbackBar {...register(theme, props)} />
      case 'coin-backdrop':
        return <CoinBackdrop {...register(theme, props)} />
      case 'restart':
        return <Restart {...register(theme, props)} />
      case 'home':
        return <Home {...register(theme, props)} />
      case 'success':
        return <Success {...register(theme, props)} />
      case 'fail':
        return <Fail {...register(theme, props)} />
      case 'ellipsis':
        return <Ellipse {...register(theme, props)} />
    }
  }, [props, theme])

  return <Suspense fallback={<BaseContainer />}>{icon}</Suspense>
}
