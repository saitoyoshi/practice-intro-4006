'use strict';
import crypto from 'crypto';
// import dc from 'damage-calc';
const root = document.getElementById('root');
root.innerHTML = '<p>' + crypto.randomBytes(8).toString('hex') + '</p>';
// root.innerHTML =
  // '<p>攻撃力 100, 防御 50, 防御貫通 30 のダメージは、' +
  // dc.effectiveDamage(100, 50, 30) +
  // '</p>';
