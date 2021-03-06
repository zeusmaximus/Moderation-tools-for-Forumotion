/**
 * Title         : Forumotion tools for moderation
 * Version       : 1.0.2
 * Author        : Zeus
 * Author URI    : http://help.forumgratuit.ro
 * License       : GNU - General Public License v3.0
 * Documentation : https://github.com/zeusmaximus/Moderation-tools-for-Forumotion/
 * Last update   : May 28, 2017 at 16:03
 */

var zModConfig = [{
    icon: "https://i58.servimg.com/u/f58/11/80/17/98/chat-110.png",
    source : "https://cdn.rawgit.com/zeusmaximus/Moderation-tools-for-Forumotion/4a66d49/script.js",
    loadCss: true,
    fontAwesome: true
}];

var zModTabels = [{
        type: "zalert",
        body_start: '[table class="zmod_box zalert"][tr][td style="padding-right: 10px;" width="60px;"][icon="fa fa-exclamation-circle"][/icon][div]',
        body_end: "[/div][/td][/tr][/table]\n\n"
    },
    {
        type: "zsuccess",
        body_start: '[table class="zmod_box zsuccess"][tr][td style="padding-right: 10px;" width="60px;"][icon="fa fa-check"][/icon][div]',
        body_end: "[/div][/td][/tr][/table]\n\n"
    },
    {
        type: "zdefault",
        body_start: '[table class="zmod_box zdefault"][tr][td style="padding-right: 10px;" width="60px;"][icon="fa fa-rocket"][/icon][div]',
        body_end: "[/div][/td][/tr][/table]\n\n"
    },
    {
        type: "zwarning",
        body_start: '[table class="zmod_box zwarning"][tr][td style="padding-right: 10px;" width="60px;"][icon="fa fa-exclamation-triangle"][/icon][div]',
        body_end: "[/div][/td][/tr][/table]\n\n"
    },
    {
        type: "zinfo",
        body_start: '[table class="zmod_box zinfo"][tr][td style="padding-right: 10px;" width="60px;"][icon="fa fa-info"][/icon][div]',
        body_end: "[/div][/td][/tr][/table]\n\n"
    }
];

var zModMessages = [{
        name: "Alert example",
        message: '[b]Alert[/b] \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        group_id: 0,
        type: "zalert"
    },
    {
        name: "Success example",
        message: '[b]Success[/b] \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        group_id: 0,
        type: "zsuccess"
    },
    {
        name: "Default example",
        message: '[b]Default[/b] \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        group_id: 1,
        type: "zdefault"
    },
    {
        name: "Warning example",
        message: '[b]Warning[/b] \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        group_id: 1,
        type: "zwarning"
    },
    {
        name: "Info example",
        message: '[b]Info[/b] \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        group_id: 1,
        type: "zinfo"
    }
];

var zModGroups = [{
        id: 0,
        name: 'Administrators'
    },
    {
        id: 1,
        name: 'Moderators'
    }
];

$.getScript( zModConfig[0].source, function(textStatus) {
    console.log( "zModStatus:" + textStatus);
});
