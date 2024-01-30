import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import TicTacToe from './TicTacToe.tsx'
import ProjectCate from './ProjectCategoryRow.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProjectCate />
  </React.StrictMode>,
)

