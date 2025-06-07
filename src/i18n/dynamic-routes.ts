import { getCollection } from 'astro:content';

interface RouteMap {
  [lang: string]: string;
}

export async function generateRouteMap(): Promise<Record<string, RouteMap>> {
  const pages = await getCollection('pages');
  const posts = await getCollection('blog');
  
  const allContent = [...pages, ...posts];
  
  const routeMap = allContent.reduce((map, item) => {
    const id = item.id;
    const keySlug = item.data.slugMaster;
    const lang = item.data.lang;
    
    if (!keySlug || !lang) return map;
    
    if (!map[keySlug]) {
      map[keySlug] = {};
    }
    
    map[keySlug][lang] = id;
    
    return map;
  }, {} as Record<string, RouteMap>);
  
  return routeMap;
}
