//============================================================================
// Eli_ExtraTrigger.js
//============================================================================

/*:
@plugindesc v2.0.0 - Adds an extra action button and a distance button to activate events!
@author Hakuen Studio

@help 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
If you like my work, please consider supporting me on Patreon!
https://www.patreon.com/hakuenstudio
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
==============================================================================
Introduction
==============================================================================

There are 3 ways for a player to activate an event:
    • Event touch
    • Player touch
    • Action button

If by chance you want the player to activate the event in another way, you 
would normally have to create a parallel event with the condition:
if (Input.isTriggered ('button name')) // Executes commands.
This plugin gives you the possibility to activate events with another action 
button or event, activate them from a distance!
Thus, you can create interesting systems without the need for script calls, 
complex events full of conditions, or parallel ones.
    • One button to hold something (Z) / Another to release (extra)
    • A button to talk to an NPC (Z) / Another to steal from it (extra).
    • A button to throw a stone in a monster! (distance)

==============================================================================
Features
==============================================================================

    • Adds a new action button that you can trigger the same events and 
execute different commands!
    • Adds a new action button that you can trigger the same events from 
distance and execute different commands!
    • It gives the option to remove the event behavior from looking at the 
player when activated with the extra button.

==============================================================================
How to use
==============================================================================

It's very simple!

Your event page must be configured in two parts:
    • 1st part will be activated with the normal Z button ('ok')
    • 2nd and 3rd part will be activated with the extra action button or 
the distance button.

After you finish setting up the first part, you can make the other parts 
entering two commands in the event following that order:

Exit Event Processing
Label (the name of the label contained in the "Trigger label" parameter)

• Now, when activating the event with the standard action button (Z) it will 
not perform neither the extra action part or the distance one.
• And if you activate the event with the other buttons, it will only execute
the part that is between the label and exit event processing.
• You can optionally remove the behaviour of the event to turn at the player
when you interact with it using the extra action button or the distance button. 
Just put in the note field of the desired event: <lock>

NOTE¹: This only work with events set to trigger by the Action Button.
NOTE²: The distance button only works for events with the normal priority.

==============================================================================
Terms of Use
==============================================================================

https://www.hakuenstudio.com/rpg-maker/terms-of-use

==============================================================================
Contact
==============================================================================

RM Web - https://forums.rpgmakerweb.com/index.php?members/eliaquim.123037/
Centro Rpg Maker - https://centrorpg.com/index.php?action=profile
Instagram - https://www.instagram.com/hakuenstudio
Twitter - https://twitter.com/hakuen_studio
Facebook - https://www.facebook.com/hakuenstudio

==============================================================================
Updatelog
==============================================================================
Version 2.0.0 - 04/26/2021
- Changed the plugin parameters and add a dropdown list to select with 
keyboard key you will use for the extra buttons.
Version 1.3.0 - 09/18/2020
- Fixed a bug that the <lock> tag was not working properly.
Version 1.2.0 - 08/22/2020
- Code restructuring.
Version 1.1.0 - 06/24/2020
- Added a button that can activate events from a distance!
Version 1.0.0 - 05/12/2020
- Plugin release!

@param ---Extra Trigger Button---

@param actionButtonCode
@text Keyboard button
@type select
@option a @option b @option c @option d @option e @option f @option g @option h @option i @option j @option k @option l @option m @option n @option o @option p @option q @option r @option s @option t @option u @option v @option w @option x @option y @option z @option 0 @option 1 @option 2 @option 3 @option 4 @option 5 @option 6 @option 7 @option 8 @option 9 @option backspace @option tab @option enter @option shift @option ctrl @option alt @option pausebreak @option capslock @option esc @option space @option pageup @option pagedown @option end @option home @option leftarrow @option uparrow @option rightarrow @option downarrow @option insert @option delete @option leftwindowkey @option rightwindowkey @option selectkey @option numpad0 @option numpad1 @option numpad2 @option numpad3 @option numpad4 @option numpad5 @option numpad6 @option numpad7 @option numpad8 @option numpad9 @option multiply" @option add @option subtract @option decimalpoint @option divide @option f1 @option f2 @option f3 @option f4 @option f5 @option f6 @option f7 @option f8 @option f9 @option f10 @option f11 @option f12 @option numlock @option scrolllock @option semicolon @option equalsign @option comma @option dash @option period @option forwardslash @option graveaccent @option openbracket @option backslash @option closebracket @option singlequote
@desc Just insert the keyboard button. Default is C.
@default c

@param actionButtonLabel
@text Trigger label
@type text
@desc Add here the label comand you want to put to activate the event with the extra trigger button.
@default Extra trigger

@param ---Distance Trigger Button---

@param distanceButtonCode
@text Keyboard Button
@type select
@option a @option b @option c @option d @option e @option f @option g @option h @option i @option j @option k @option l @option m @option n @option o @option p @option q @option r @option s @option t @option u @option v @option w @option x @option y @option z @option 0 @option 1 @option 2 @option 3 @option 4 @option 5 @option 6 @option 7 @option 8 @option 9 @option backspace @option tab @option enter @option shift @option ctrl @option alt @option pausebreak @option capslock @option esc @option space @option pageup @option pagedown @option end @option home @option leftarrow @option uparrow @option rightarrow @option downarrow @option insert @option delete @option leftwindowkey @option rightwindowkey @option selectkey @option numpad0 @option numpad1 @option numpad2 @option numpad3 @option numpad4 @option numpad5 @option numpad6 @option numpad7 @option numpad8 @option numpad9 @option multiply" @option add @option subtract @option decimalpoint @option divide @option f1 @option f2 @option f3 @option f4 @option f5 @option f6 @option f7 @option f8 @option f9 @option f10 @option f11 @option f12 @option numlock @option scrolllock @option semicolon @option equalsign @option comma @option dash @option period @option forwardslash @option graveaccent @option openbracket @option backslash @option closebracket @option singlequote
@desc Just insert the keyboard button. Default is V.
@default v

@param distanceButtonLabel
@text Trigger label
@type text
@desc Add here the label comand you want to put to activate the event with the distance trigger button.
@default Distance trigger

@param distanceVariable
@text Distance variable
@type variable
@desc This variable value will control how far, in tiles, you can activate an event.
@default 1

*/

"use strict"

var Eli = Eli || {}
var Imported = Imported || {}
Imported.Eli_ExtraTrigger = true

/* ========================================================================== */
/*                                    ALERT                                   */
/* ========================================================================== */

Eli.needBook = function() {
    if(!Eli.alert){
        window.alert(`Eli's_Book.js was not found. 
Please download the latest version for free.`);
        if(confirm) {
            window.open('https://hakuenstudio.itch.io/elis-book-rpg-maker-mv');
        }
        Eli.alert = true;
    }
}

if(!Imported.Eli_Book) Eli.needBook()

/* ========================================================================== */
/*                                   PLUGIN                                   */
/* ========================================================================== */

{

Eli.ExtraTrigger = {

    parameters: eli.convertParameters(PluginManager.parameters("Eli_ExtraTrigger")) || {},
    alias: {},
    actionButton: '',
    distanceButton: '',

    initialize(){
        this.setActionButton();
        this.setDistanceButton(); 
    },

    setActionButton(){
        const keyName = this.parameters.actionButtonCode.toLowerCase()
        const actionCode = Input.keyBoardCodes[keyName]

        if(Input.keyMapper.hasOwnProperty(actionCode)){
            this.actionButton = Input.keyMapper[actionCode]
        }else{
            Input.keyMapper[actionCode] = 'okExtra'
            this.actionButton = 'okExtra'
        }
    },

    setDistanceButton(){
        const keyName = this.parameters.distanceButtonCode.toLowerCase()
        const distanceCode = Input.keyBoardCodes[keyName]

        if(Input.keyMapper.hasOwnProperty(distanceCode)){
            this.distanceButton = Input.keyMapper[distanceCode]
        }else{
            Input.keyMapper[distanceCode] = 'okDistance'
            this.distanceButton = 'okDistance'
        }
    },

    getActionButton(){
        return this.actionButton;
    },

    getDistanceButton(){
        return this.distanceButton;
    },

    param(){
        return this.parameters;
    },
}

const Plugin = Eli.ExtraTrigger;
const Alias = Eli.ExtraTrigger.alias;

Plugin.initialize();

/* ========================================================================== */
/*                                   OBJECTS                                  */
/* ========================================================================== */

/* ------------------------------- GAME PLAYER ------------------------------ */

Alias.Game_Player_triggerButtonAction = Game_Player.prototype.triggerButtonAction;
Game_Player.prototype.triggerButtonAction = function() {
    const alias = Alias.Game_Player_triggerButtonAction.call(this)

    if(Input.isTriggered(Plugin.getActionButton())) {
        return this.triggerButtonActionExtra()
    }

    if(Input.isTriggered(Plugin.getDistanceButton())){
        return this.triggerButtonDistance()
    }

    return alias
};

Game_Player.prototype.triggerButtonActionExtra = function() {
    this.checkEventTriggerHere([0]);
    if ($gameMap.setupStartingEvent()) {
        return true
    }

    this.checkEventTriggerThere([0,1,2])
    if ($gameMap.setupStartingEvent()) {
        return true
    }

    return false
};

Game_Player.prototype.triggerButtonDistance = function(){
    const id = Plugin.param().distanceVariable
    const variable = $gameVariables.value(id)
    const distance = Math.max(2, variable)

    for(let i = 2, l = distance; i <= l; i++){
        const dir = { 
            2: [this.x, this.y + i], 
            4: [this.x - i, this.y], 
            6: [this.x + i, this.y], 
            8: [this.x, this.y - i] 
        };
        const x = Math.abs(dir[this._direction][0])
        const y = Math.abs(dir[this._direction][1])
        const hasEvent = $gameMap.eventIdXy(x, y)

        if(hasEvent){
            this.startMapEvent(x, y, [0], true)
            return true
        }
    }

    return false
};

/* ------------------------------- GAME EVENT ------------------------------- */

Alias.Game_Event_start = Game_Event.prototype.start;
Game_Event.prototype.start = function() {
    const param = Plugin.param()
    this.removeExtraButtonLabel(param.actionButtonLabel)
    this.removeExtraButtonLabel(param.distanceButtonLabel)

    if(Input._latestButton === Plugin.getActionButton()){
        this.startWithExtraButtons(param.actionButtonLabel)

    }else if(Input._latestButton === Plugin.getDistanceButton()){
        this.startWithExtraButtons(param.distanceButtonLabel)

    }else{
        Alias.Game_Event_start.call(this)
    }
};

Game_Event.prototype.removeExtraButtonLabel = function(label){
    if(this.list()[0].parameters.contains(label)) this.list().shift()
};

Game_Event.prototype.startWithExtraButtons = function(label){
    const jumpToLabel = {
        code: 119, 
        indent: 0, 
        parameters:[label]
    };
    const list = this.list()
    const hasLock = this.note().toLowerCase().includes('<lock>')

    list.splice(0, 0, jumpToLabel);
    this._starting = list && list.length > 1

    if (this.isTriggerIn([0,1,2]) && !hasLock) {
        this.lock()
    }
}

}