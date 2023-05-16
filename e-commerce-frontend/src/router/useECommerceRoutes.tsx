import { lazy, useMemo, LazyExoticComponent } from 'react'
import { TablerIcon, IconGauge, IconFileReport, IconUserPlus, IconUsers, IconCheckupList, IconCalendarEvent } from '@tabler/icons'

const Outlet = lazy(() => import('react-router-dom').then((module) => ({ default: module.Outlet })))

const DashboardCompletedEvents = lazy(() => import('pages/index'))
const DashboardOncomingEvents = lazy(() => import('pages/index'))
const HospitalityCities = lazy(() => import('pages/index'))
const DashboardPresentation = lazy(() => import('pages/index'))

const UsersDetail = lazy(() => import('pages/index'))
const Users = lazy(() => import('pages/index'))

const Targets = lazy(() => import('pages/index'))
const MonthlyTargets = lazy(() => import('pages/index'))
const YearlyTargets = lazy(() => import('pages/index'))


export type CRouteElement = LazyExoticComponent<({ pageTitle }: { pageTitle: string }) => JSX.Element>
export type CRoute = {
	title: string
	path: string
	element: CRouteElement
	icon?: TablerIcon
	subroutes?: CRoute[]
	inMenu: boolean // show in sidebar menu
	inRoute: boolean // allow in route
}

export const useECommerceRoutes = () => {
	const routes: CRoute[] = useMemo(
		() => [
			{
				title: 'Dashboard',
				path: 'dashboard',
				element: Outlet as CRouteElement,
				inRoute: true,
				inMenu: true,
				subroutes: [
					{
						title: 'Dashboard - Tamamlanmış Etkinlikler',
						path: 'completed-events',
						element: DashboardCompletedEvents,
						inRoute: true,
						inMenu: true,
						subroutes: [],
					},
					{
						title: 'Dashboard - Yaklaşan Etkinlikler',
						path: 'oncoming-events',
						element: DashboardOncomingEvents,
						inRoute: true,
						inMenu: true,
						subroutes: [],
					},
					{
						title: 'Dashboard - Ağırlama Yapılan İller',
						path: 'hospitality-cities',
						element: HospitalityCities,
						inRoute: true,
						inMenu: true,
						subroutes: [],
					},
					{
						title: 'Dashboard - Bakan Sunumu',
						path: 'presentation',
						element: DashboardPresentation,
						inRoute: true,
						inMenu: true,
						subroutes: [],
					},
				],
			},
			{
				title: 'Kullanıcılar',
				path: 'users',
				icon: IconUsers,
				element: Outlet as CRouteElement,
				inRoute: true,
				inMenu: true,
				subroutes: [
					{
						title: 'Kullanıcılar - Kullanıcı Listesi',
						path: '',
						element: Users,
						inRoute: true,
						inMenu: true,
						subroutes: [],
					},
					{
						title: 'Kullanıcılar - Kullanıcı Detay',
						path: ':id',
						icon: IconUsers,
						element: UsersDetail,
						inRoute: true,
						inMenu: true,
						subroutes: [],
					},
				],
			},
			{
				title: 'Hedefler',
				path: 'targets',
				icon: IconGauge,
				element: Targets,
				inRoute: true,
				inMenu: true,
				subroutes: [
					{
						title: 'Hedefler - Yıllık Hedefler',
						path: 'yearly-targets',
						icon: IconGauge,
						element: YearlyTargets,
						inRoute: true,
						inMenu: true,
						subroutes: [],
					},
					{
						title: 'Hedefler - Aylık Hedefler',
						path: 'monthly-targets',
						icon: IconGauge,
						element: MonthlyTargets,
						inRoute: true,
						inMenu: true,
						subroutes: [],
					},
				],
			},
		],
		[]
	)
	return routes
}
