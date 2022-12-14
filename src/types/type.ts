export namespace T {
  export type CardNode = {
    /** levelIndex is for generating position for the node on its level */
    levelIndex: number;
    /** name is used for debugging */
    name: string;
    level: number;
    layout: Layout;
    position: Position;
    type: number;
    viewUrl: string;
    status: CardStatus;
    overlaps: CardNode[];
    size: number;
  };

  export type Layout = {
    left: number;
    top: number;
  };

  export type Position = {
    row: number;
    col: number;
  };

  export enum CardStatus {
    Clickable,
    Frozen,
    Selected,
    Removed,
  }

  export enum GameStatus {
    InProgress,
    Win,
    Lose,
  }

  /**
   * A backtracing log for the go-back feature
   */
  export type EventLog = {
    node: CardNode | null;
    preEventLog: EventLog | null;
  };

  export interface GameConfig {
    expectedLevelCount: number;
    typeCount: number;
    cardSize: number;
    containerWidth: number;
    containerHeight: number;
    stackDepth: number;
    unblockChances: number;
    backChances: number;
    matchCount: number;
  }

  export interface GameContext {
    nodes: CardNode[];
    selectedNodes: CardNode[];
    unblockedNodes: CardNode[];
    canBack: boolean;
    canUnblockFirstThree: boolean;
    gameStatus: GameStatus;

    onSelect: (node: CardNode) => void;
    onBack: () => void;
    onUnblockFirstThree: () => void;
    onInitialize: () => void;
  }

  export type GameMeta = {
    title: string;
    author: string;
    copyright: string;
  };
}
