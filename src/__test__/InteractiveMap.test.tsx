import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import InteractiveMap from '../components/InteractiveMap'

describe('InteractiveMap', () => {
  test('renders InteractiveMap component', () => {
    render(<InteractiveMap onMapClick={() => {}} />)
    const mapContainer = screen.getByTestId('map-container')
    expect(mapContainer).toBeInTheDocument()
  })

  test('calls onMapClick when the map is clicked', () => {
    const onMapClickMock = jest.fn()
    render(<InteractiveMap onMapClick={onMapClickMock} />)

    const mapContainer = screen.getByTestId('map-container')
    fireEvent.click(mapContainer)

    expect(onMapClickMock).toHaveBeenCalled()
  })
})
