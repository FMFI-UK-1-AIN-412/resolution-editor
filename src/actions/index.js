export const ADD_STEP = 'ADD_STEP';
export const CHANGE_STEP = 'CHANGE_STEP';
export const CHANGE_RULE = 'CHANGE_RULE';
export const CHANGE_UNIFIER = 'CHANGE_UNIFIER';
export const CHANGE_RENAMING = 'CHANGE_RENAMING';
export const CHANGE_REFERENCE = 'CHANGE_REFERENCE';
export const DELETE_STEP = 'DELETE_STEP';
export const INSERT_STEP = 'INSERT_STEP';
export const STEP_UP = 'STEP_UP';
export const STEP_DOWN = 'STEP_DOWN';
export const CHANGE_CONST = 'CHANGE_CONST';
export const CHANGE_FUN = 'CHANGE_FUN';
export const CHANGE_PRED = 'CHANGE_PRED';
export const EMPTY_ACTION = 'EMPTY_ACTION';

let nextStepId = 0;

export const emptyAction = () => ({
  type: EMPTY_ACTION
})

export const addStep = () => ({
  type: ADD_STEP,
  id: nextStepId++,
})

export const changeStep = (id, text) => ({
  type: CHANGE_STEP,
  id,
  text
})

export const changeRule = (id, text) => ({
  type: CHANGE_RULE,
  id,
  text
})

export const changeUnifier = (id, text) => ({
  type: CHANGE_UNIFIER,
  id,
  text
})

export const changeRenaming = (id, text) => ({
  type: CHANGE_RENAMING,
  id,
  text
})

export const changeReference = (id, text) => ({
  type: CHANGE_REFERENCE,
  id,
  text
})

export const changeConst = (text) => ({
  type: CHANGE_CONST,
  text
})

export const changeFun = (text) => ({
  type: CHANGE_FUN,
  text
})

export const changePred = (text) => ({
  type: CHANGE_PRED,
  text
})

export const deleteStep = (id) => ({
  type: DELETE_STEP,
  id
})

export const insertStep = (position) => ({
  type: INSERT_STEP,
  id: nextStepId++,
  position
})

export const moveStepUp = (position) => ({
  type: STEP_UP,
  position
})

export const moveStepDown = (position) => ({
  type: STEP_DOWN,
  position
})