/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/AgenteAlimentarScreen` | `/AgenteAlimentarScreen`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/CorAgentApp` | `/CorAgentApp`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/PriceTable` | `/PriceTable`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/AgenteAlimentarScreen` | `/AgenteAlimentarScreen`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/CorAgentApp` | `/CorAgentApp`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/PriceTable` | `/PriceTable`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/AgenteAlimentarScreen${`?${string}` | `#${string}` | ''}` | `/AgenteAlimentarScreen${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/CorAgentApp${`?${string}` | `#${string}` | ''}` | `/CorAgentApp${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/PriceTable${`?${string}` | `#${string}` | ''}` | `/PriceTable${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/AgenteAlimentarScreen` | `/AgenteAlimentarScreen`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/CorAgentApp` | `/CorAgentApp`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/PriceTable` | `/PriceTable`; params?: Router.UnknownInputParams; };
    }
  }
}
