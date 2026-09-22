import { Bug, Heart, Star } from 'lucide-react'
import React from 'react'

import { Container, Links, Link } from './styles'

export const Footer: React.FC = () => {
  return (
    <Container>
      <Links>
        <Link rel="noreferrer" target="_blank" href="https://github.com/NemesisHubris/nsfw-filter-for-families">
          <Star size={15} /> Star on GitHub
        </Link>
        <Link rel="noreferrer" target="_blank" href="https://github.com/NemesisHubris/nsfw-filter-for-families/issues">
          <Bug size={15} /> Report a bug
        </Link>
        <Link rel="noreferrer" target="_blank" href="https://ko-fi.com/kindlemodshelfguy">
          <Heart size={15} /> Support on Ko-fi
        </Link>
      </Links>
    </Container>
  )
}
