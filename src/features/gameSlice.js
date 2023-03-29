import { createSlice } from '@reduxjs/toolkit'
import { defaultState, nextRotation, canMoveTo } from '../utils'

export const gameSlice = createSlice({
    name: 'game',
    initialState: defaultState(),
    reducers: {
        pause: (state) => {
            state.isRunning = false
            return state
          },
        resume: (state) => {
            state.isRunning = true
            return state
          },
        moveLeft: (state) => {
            const { shape, grid, x, y, rotation } = state
            if (canMoveTo(shape, grid, x - 1, y, rotation)) {
              state.x = x - 1
            }
            return state
          },
        moveRight: (state) => {
            const { shape, grid, x, y, rotation } = state
            if (canMoveTo(shape, grid, x + 1, y, rotation)) {
              state.x = x + 1
            }
            return state
          },
        moveDown: () => {},
        rotate: (state) => {
            const { shape, grid, x, y, rotation } = state
            const newRotation = nextRotation(shape, rotation)
            if (canMoveTo(shape, grid, x, y, newRotation)) {
              state.rotation = newRotation
            }
            return state
          },
        gameOver: () => {},
        restart: () => {}
    },
})

// Action creators are generated for each case reducer function
export const {
    moveLeft, 
    moveRight, 
    moveDown, 
    rotate, 
    pause, 
    resume, 
    gameOver, 
    restart
 } = gameSlice.actions

export default gameSlice.reducer