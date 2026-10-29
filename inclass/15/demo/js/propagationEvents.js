export function setupPropagationEvents() {
  // TODO: Select the nested boxes, inner button, event log, and clear button.
  const outerBox = document.querySelector('#outer-box');
  const middleBox = document.querySelector('#middle-box');
  const innerButton = document.querySelector('#inner-button');
  const eventLog = document.querySelector('#event-log');
  const btnClearLog = document.querySelector('#btn-clear-log');

  if (!outerBox || !middleBox || !innerButton || !eventLog || !btnClearLog) {
    return;
  }
  // TODO: Add bubbling and capturing listeners.
  function addLog(messageText) {
    const logItem = document.createElement('li');
    logItem.textContent = messageText;
    eventLog.append(logItem);
  }
  outerBox.addEventListener('click', () => {
    addLog('Bubble:outer box');
  });
  innerButton.addEventListener('click', () => {
    addLog('Bubble:inner button');
  });
   middleBox.addEventListener('click', () => {
    addLog('Bubble:middle box');
  })

  btnClearLog.addEventListener('click',() => {
    eventLog.textContent = '';
  });
  // If an eventlistener is attached to a child, the parents listen for it as well. this process is called event bubbling.
  outerBox.addEventListener('click', () => {
    addLog('capture: outer box');
  }, true);
  // the third paramter in .addEventListener() is useCapture and is by default false.
  middleBox.addEventListener('click', () => {
    addLog('capture: middle box');
  }, true);
  // capturing parent--> child
  // bubbling child --> parent
  // e.stopPropagation() can stop bubbling and capturing both.
}
