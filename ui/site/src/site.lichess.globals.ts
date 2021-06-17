import StrongSocket from './component/socket';
import { requestIdleCallback, escapeHtml } from './component/functions';
import makeChat from './component/chat';
import once from './component/once';
import spinnerHtml from './component/spinner';
import sri from './component/sri';
import { storage, tempStorage } from './component/storage';
import powertip from './component/powertip';
import {
  assetUrl,
  loadCss,
  loadCssPath,
  jsModule,
  loadScript,
  hopscotch,
  userComplete,
  loadModule,
} from './component/assets';
import widget from './component/widget';
import idleTimer from './component/idle-timer';
import pubsub from './component/pubsub';
import { unload, redirect, reload } from './component/reload';
import announce from './component/announce';
import trans from './component/trans';
import sound from './component/sound';
import * as miniBoard from 'common/mini-board';
import * as miniGame from './component/mini-game';
import { format as timeago } from './component/timeago';
import watchers from './component/watchers';


window.addEventListener('load', function () {
  const ChangePlayerOnline = () => {
      setInterval(() => {
          const forGamesInPlay = getRandomIntInclusive(100, 1000);
          const forPlayers = getRandomIntInclusive(100, forGamesInPlay);
          const nb_games_in_play = document.querySelector('#nb_games_in_play');
          const nb_connected_players = document.querySelector('#nb_connected_players');
          if (nb_games_in_play !== null && nb_connected_players !== null) {
              nb_games_in_play.innerHTML = forGamesInPlay.toString() + 'games in play';
              nb_connected_players.innerHTML = forPlayers.toString() + 'players';
          }
      }, 30000)

  }
  function getRandomIntInclusive(min: number, max: number): number {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  ChangePlayerOnline();
});




export default function () {
  const l = window.lichess;
  l.StrongSocket = StrongSocket;
  l.requestIdleCallback = requestIdleCallback;
  l.sri = sri;
  l.storage = storage;
  l.tempStorage = tempStorage;
  l.once = once;
  l.powertip = powertip;
  l.widget = widget;
  l.spinnerHtml = spinnerHtml;
  l.assetUrl = assetUrl;
  l.loadCss = loadCss;
  l.loadCssPath = loadCssPath;
  l.jsModule = jsModule;
  l.loadScript = loadScript;
  l.loadModule = loadModule;
  l.hopscotch = hopscotch;
  l.userComplete = userComplete;
  l.makeChat = makeChat;
  l.idleTimer = idleTimer;
  l.pubsub = pubsub;
  l.unload = unload;
  l.redirect = redirect;
  l.reload = reload;
  l.watchers = watchers;
  l.escapeHtml = escapeHtml;
  l.announce = announce;
  l.trans = trans;
  l.sound = sound;
  l.miniBoard = miniBoard;
  l.miniGame = miniGame;
  l.timeago = timeago;
  l.contentLoaded = (parent?: HTMLElement) => pubsub.emit('content-loaded', parent);
}
