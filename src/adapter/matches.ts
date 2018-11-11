import * as ChallongeAdapterBase from './base';
import * as matchInterfaces from '../interfaces/match.interface';

/** Namespace for all of the Match routes */
export namespace MatchAdapter {
    /** Retrieve a tournament's match list. */
  export function index(api_key: string, tournament_url: string): Promise<matchInterfaces.indexMatchesResponse> {
    return new Promise((resolve, reject) => {
      ChallongeAdapterBase.getRequest(`tournaments/${tournament_url}/matches`, api_key).then(res => {
        const { data, status } = res;

        resolve({ matches: data, status });
      }).catch(err => reject(err));
    });
  }

  /** Retrieve a single match record for a tournament. */
  export function show(api_key: string, tournament_url: string, match_id: number): Promise<matchInterfaces.showMatchResponse> {
    return new Promise((resolve, reject) => {
      ChallongeAdapterBase.putRequest(`tournaments/${tournament_url}/matches/${match_id}`, api_key).then(res => {
        const { data: { match }, status } = res;

        resolve({ match, status });
      }).catch(err => reject(err));
    });
  }

  /** Retrieve a single match record for a tournament. */
  export function update(api_key: string, tournament_url: string, match_id: number, params: matchInterfaces.updateMatchesRequest): Promise<matchInterfaces.updateMatchResponse> {
    return new Promise((resolve, reject) => {
      ChallongeAdapterBase.putRequest(`tournaments/${tournament_url}/matches/${match_id}`, api_key, params).then(res => {
        const { data: { match }, status } = res;

        resolve({ match, status });
      }).catch(err => reject(err));
    });
  }

  /** Retrieve a single match record for a tournament. */
  export function reopen(api_key: string, tournament_url: string, match_id: number): Promise<matchInterfaces.reopenMatchResponse> {
    return new Promise((resolve, reject) => {
      ChallongeAdapterBase.postRequest(`tournaments/${tournament_url}/matches/${match_id}/reopen`, api_key).then(res => {
        const { data: { match }, status } = res;

        resolve({ match, status });
      }).catch(err => reject(err));
    });
  }
}