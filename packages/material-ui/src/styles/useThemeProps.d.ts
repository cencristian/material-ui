export interface ThemeWithProps<Components> {
  components?: { [K in keyof Components]: { defaultProps?: Partial<Components[K]> } };
}

export type ThemedProps<Theme, Name extends keyof any> = Theme extends {
  components: Record<Name, { defaultProps: infer Props }>;
}
  ? Props
  : {};

export default function useThemeProps<
  Theme extends ThemeWithProps<any>,
  Props,
  Name extends keyof any
>(params: { props: Props; name: Name }): Props & ThemedProps<Theme, Name>;