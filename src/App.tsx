import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './modules/home';
import MainRoot from './roots/MainRoot';
import { ContentProvider } from './context/contentContext';
import Clublied from './modules/clublied';
import Praesidium from './modules/praesidium';
import Evenementen from './modules/evenementen';

function App() {
// Test
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
          element: <Evenementen/>
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
