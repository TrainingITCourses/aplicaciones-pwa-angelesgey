export interface Global {
    launches: any[];
    launchStatuses: any[];
    agencies: any[];
    missionTypes: any[];
}

export const globalInitialState: Global = {
  launches: [],
  launchStatuses: [],
  agencies: [],
  missionTypes: []
};