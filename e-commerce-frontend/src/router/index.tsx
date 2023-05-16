import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useWindowScroll } from '@mantine/hooks'
import { useECommerceRoutes } from './useECommerceRoutes'

const Router = () => {
    const { pathname } = useLocation()
    const [_, scrollTo] = useWindowScroll()
    const routes = useECommerceRoutes()

    useEffect(() => {
        scrollTo({ x: 0, y: 0 })
    }, [pathname])

    return (
        <Routes>
            <Route>
                {routes.map((route) => {
                    if (!route.inRoute) return null
                    if (route.subroutes?.length) {
                        return (
                            <Route key={route.path} path={route.path} element={<route.element pageTitle={route.title} />}>
                                {route.subroutes.map((subroute) => {
                                    if (!subroute.inRoute) return null
                                    if (subroute.subroutes?.length) {
                                        return (
                                            <Route key={route.path + subroute.path} path={subroute.path} element={<subroute.element pageTitle={subroute.title} />}>
                                                {subroute.subroutes.map((subSubroute) => {
                                                    if (!subSubroute.inRoute) return null
                                                    return (
                                                        <Route key={route.path + subroute.path + subSubroute.path} path={subSubroute.path} element={<subSubroute.element pageTitle={subSubroute.title} />} />
                                                    )
                                                })}
                                                <Route path='' element={<Navigate to={`${subroute.subroutes[0].path}`} replace />} />
                                                <Route path='*' element={<Navigate to={`${subroute.subroutes[0].path}`} replace />} />
                                            </Route>
                                        )
                                    }

                                    return <Route key={route.path + subroute.path} path={subroute.path} element={<subroute.element pageTitle={subroute.title} />} />
                                })}
                                <Route path='' element={<Navigate to={`${route.subroutes[0].path}`} replace />} />
                                <Route path='*' element={<Navigate to={`${route.subroutes[0].path}`} replace />} />
                            </Route>
                        )
                    }
                    return <Route key={route.path} path={route.path} element={<route.element pageTitle={route.title} />} />
                })}
            </Route>
            <Route path='*' element={<Navigate to='/dashboard' replace />} />
        </Routes>
    )
}

export default Router