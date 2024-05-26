import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './modules/home';
import MainRoot from './roots/MainRoot';
import { ContentProvider } from './context/contentContext';
import Clublied from './modules/clublied';
import Praesidium from './modules/praesidium';
import Evenementen from './modules/evenementen';
import EvenementDetail from './modules/evenementDetail';

function App() {
  const router = createBrowserRouter([
    {
      path: '',
      element: <MainRoot />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: 'lan',
          element: <></>
        },
        {
          path: 'praesidium',
          element: <Praesidium/>
        },
        {
          path: 'geschiedenis',
          element: <></>
        },
        {
          path: 'clublied',
          element: <Clublied />
        },
        {
          path: 'evenementen',
          children: [
            {
              path: '',
              element: <Evenementen/>,
            },
            {
              path: ':eventUrl',
              element: <EvenementDetail/>,
            },
          ]
        },
        {
          path: 'doop',
          element: <></>
        },
      ],
    }
  ]);
  return (
    <ContentProvider>
      <RouterProvider router={router} />
    </ContentProvider>
  )
}

export default App
