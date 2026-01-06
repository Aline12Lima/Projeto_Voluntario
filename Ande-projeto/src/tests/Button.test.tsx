import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Button } from '../components/ui/Button'

describe('UI Button', () => {
  it('renderiza o texto passado como children', () => {
    render(<Button>Clique aqui</Button>)

    expect(screen.getByText('Clique aqui')).toBeInTheDocument()
  })

  it('renderiza como link quando href é informado', () => {
    render(<Button href="https://example.com">Ir para site</Button>)

    const link = screen.getByRole('link', { name: 'Ir para site' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://example.com')
  })

  it('aplica a variante outline corretamente', () => {
    render(<Button variant="outline">Outline</Button>)

    const button = screen.getByRole('button', { name: 'Outline' })
    expect(button.className).toContain('border-2')
  })
})
