import { cloneElement } from "react";

export const Providers = ({ providers, children }) => {
  const renderProvider = (providers, children) => {
    const [provider, ...restProviders] = providers;

    if (provider) {
      return cloneElement(
        provider,
        null,
        renderProvider(restProviders, children)
      );
    }

    return children;
  };

  return renderProvider(providers, children);
};
