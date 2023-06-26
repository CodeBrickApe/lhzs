export interface sociaMedia {
  [x: string]: {
    url: string
    icon: string
  }
}
export interface SnackbarOrigin {
  vertical: 'top' | 'bottom'
  horizontal: 'left' | 'center' | 'right'
}

export interface PosterProps {
  readonly imageUrl: string
}