import type { StructuredData } from '~/types/StructuredData'

export async function useStructuredData() {
    const route = useRoute()
    const routeName = route.path === '/' ? 'index' : route.path
        // strip leading/trailing slashes
        .replace(/^\/|\/$/g, '')
        // replace nested routes like /parent/child → parent-child
        .replace(/\//g, '-')


    try {
        const module = await import(`~/data/structured/${routeName}.ts`) as { default: StructuredData }
        const schema = module.default

        useHead(() => ({
            script: [
            {
                type: 'application/ld+json',
                innerHTML: JSON.stringify(schema),
            }
            ],
            __dangerouslyDisableSanitizers: ['script']
        }))
    console.log('[StructuredData]', routeName, schema)
    } catch (e) {
        console.log(`[StructuredData] No schema found for route: ${route.path}`)
    }
    console.log('[StructuredData] route.path:', route.path)
    console.log('[StructuredData] routeName:', routeName)
}
