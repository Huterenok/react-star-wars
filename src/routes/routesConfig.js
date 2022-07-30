import PeoplePage from '@containers/PeoplePage';
import HomePage from '@containers/HomePage';
import NotFoundPage from '@containers/NotFoundPage'
import PersonPage from '../containers/PersonPage';
import FavoritesPage from '@containers/FavoritesPage/FavoritesPage';
import SearchPage from '@containers/SearchPage';
import ErrorMessage from '@components/ErrorMessage'


const routesConfig = [
	{
			path: '',
			element: <HomePage />
	},
	{
			path: '/people',
			element: <PeoplePage />
	},
	{
		path: '/favorites',
		element: <FavoritesPage />
	},
	{
		path: '/people/:id',
		element: <PersonPage />
	},
	{
		path:'/not-found',
		element:<NotFoundPage/>
	},
	{
		path: '*',
		//exact:false
		element: <NotFoundPage/>
	},
	{
		path: '/search',
		element: <SearchPage/>
	},
	{
		path: '/fail',
		element: <ErrorMessage/>
	}

];

export default routesConfig