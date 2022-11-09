import { useContext, useEffect, useCallback } from 'react';
import { History, Transition } from 'history';

import { Navigator, UNSAFE_NavigationContext as NavigationContext } from 'react-router-dom';

type ExtendNavigator = Navigator & Pick<History, 'block'>;

export function useBlocker(blocker: (tx: Transition) => void, when = true) {
  const { navigator } = useContext(NavigationContext);

  useEffect(() => {
    if (!when) {
      return;
    }

    const unblock = (navigator as ExtendNavigator).block((tx) => {
      const autoUnblockingTx = {
        ...tx,
        retry() {
          unblock();
          tx.retry();
        },
      };
      blocker(autoUnblockingTx);
    });
    return unblock;
  }, [navigator, blocker, when]);
}

export function usePrompt(message: string, action: () => void, when = true) {
  const blocker = useCallback(
    (tx: Transition) => {
      if (window.confirm(message)) {
        action();
        tx.retry();
      }
    },
    [message, action],
  );

  useBlocker(blocker, when);
}
