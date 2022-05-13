import React from 'react';

export function Document({ children }) {
  /**
   * Typically you would just render children here, but we are adding
   * this extra branch in order to pop up the editor that reveals
   * the source content for each document
   */
  return <article>{children}</article>;
}
