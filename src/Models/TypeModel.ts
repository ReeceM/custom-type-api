/**
 * This is a custom type interface.
 *
 * This is to make it possible to determine if the returns are correct.
 */

export interface TypeModel {
  id: string,
  label: string,
  repeatable: boolean,
  json: Object,
  status: boolean
}
