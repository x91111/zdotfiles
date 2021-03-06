./vim_post.vim ./web2py.vim function s:merge(list1, list2)
  while !empty(a:list1) || !empty(a:list2)
    if !empty(a:list1) && (empty(a:list2) || a:list1[0] < a:list2[0])
      call add(ret, a:list1[0])
      unlet a:list1[0]
      call add(ret, a:list2[0])
      if !empty(a:list1) && a:list1[0] == a:list2[0]
        unlet a:list1[0]
      unlet a:list2[0]
" Return: a list of controllers found in the project (both in the
    let match = matchlist(line, regex)
    let id = inputlist(choices)
  syntax match TagListComment '^+ .\+'
./zplugin.vim snippet   enginecreate_abbrevi   engine.create_abbreviation(folder, description, abbr, contents) Create a text abbreviationsnippet   enginecreate_hotkey(   engine.create_hotkey(folder, description, modifiers, key, contents) Create a text hotkeysnippet   enginecreate_phrase(   engine.create_phrase(folder, description, contents) Create a text phrasesnippet   engineget_folder(tit   engine.get_folder(title) Retrieve a folder by its titlesnippet   engineget_macro_argu   engine.get_macro_arguments() Get the arguments supplied to the current script via its macrosnippet   enginerun_script(des   engine.run_script(description) Run an existing script using its description to look it upsnippet   engineset_return_val   engine.set_return_value(val) Store a return value to be used by a phrase macrosnippet   keyboardfake_keypress(   keyboard.fake_keypress(key, repeat=1) Fake a keypresssnippet   keyboardpress_key(key)   keyboard.press_key(key) Send a key down eventsnippet   keyboardrelease_key(ke   keyboard.release_key(key) Send a key up eventsnippet   keyboardsend_key(key,   keyboard.send_key(key, repeat=1) Send a keyboard eventsnippet   keyboardsend_keys(keyS   keyboard.send_keys(keyString) Send a sequence of keys via keyboard eventssnippet   keyboard.wait_for_keypress(self, key, modifiers=[], timeOut=100) Wait for a   keyboard.wait_for_keypress(self, key, modifiers=[], timeOut=10.0) Wait for a keypress or key combinationsnippet   mouseclick_absolute   mouse.click_absolute(x, y, button) Send a mouse click relative to the screen (absolute)snippet   mouseclick_relative   mouse.click_relative(x, y, button) Send a mouse click relative to the active windowsnippet   mouseclick_relative   mouse.click_relative_self(x, y, button) Send a mouse click relative to the current mouse positionsnippet   mouse.wait_for_click(self, button, timeOut=100) Wait for a   mouse.wait_for_click(self, button, timeOut=10.0) Wait for a mouse clicksnippet   clipboardfill_clipboard   clipboard.fill_clipboard(contents) Copy text into the clipboardsnippet   clipboardfill_selection   clipboard.fill_selection(contents) Copy text into the X selectionsnippet   clipboardget_clipboard(   clipboard.get_clipboard() Read text from the clipboardsnippet   clipboardget_selection(   clipboard.get_selection() Read text from the X selectionsnippet   dialogchoose_colour(   dialog.choose_colour(title="Select Colour") Show a Colour Chooser dialogsnippet   dialogchoose_directo   dialog.choose_directory(title="Select Directory", initialDir="~", rememberAs=None, **kwargs) Show a Directory Chooser dialogsnippet   dialogcombo_menu(opt   dialog.combo_menu(options, title="Choose an option", message="Choose an option", **kwargs) Show a combobox menusnippet   dialoginput_dialog(t   dialog.input_dialog(title="Enter a value", message="Enter a value", default="", **kwargs) Show an input dialogsnippet   dialoglist_menu(opti   dialog.list_menu(options, title="Choose a value", message="Choose a value", default=None, **kwargs) Show a single-selection list menusnippet   dialoglist_menu_mult   dialog.list_menu_multi(options, title="Choose one or more values", message="Choose one or more values", defaults=[], **kwargs) Show a multiple-selection list menusnippet   dialogopen_file(titl   dialog.open_file(title="Open File", initialDir="~", fileTypes="*|All Files", rememberAs=None, **kwargs) Show an Open File dialogsnippet   dialogpassword_dialo   dialog.password_dialog(title="Enter password", message="Enter password", **kwargs) Show a password input dialogsnippet   dialogsave_file(titl   dialog.save_file(title="Save As", initialDir="~", fileTypes="*|All Files", rememberAs=None, **kwargs) Show a Save As dialogsnippet   storeget_value(key)   store.get_value(key) Get a valuesnippet   storeremove_value(k   store.remove_value(key) Remove a valuesnippet   storeset_value(key,   store.set_value(key, value) Store a valuesnippet   systemcreate_file(fi   system.create_file(fileName, contents="") Create a file with contentssnippet   systemexec_command(c   system.exec_command(command, getOutput=True) Execute a shell commandsnippet   windowactivate(title   window.activate(title, switchDesktop=False, matchClass=False) Activate the specified window, giving it input focussnippet   windowclose(title, m   window.close(title, matchClass=False) Close the specified window gracefullysnippet   windowget_active_cla   window.get_active_class() Get the class of the currently active windowsnippet   windowget_active_geo   window.get_active_geometry() Get the geometry of the currently active windowsnippet   windowget_active_tit   window.get_active_title() Get the visible title of the currently active windowsnippet   windowmove_to_deskto   window.move_to_desktop(title, deskNum, matchClass=False) Move the specified window to the given desktopsnippet   windowclose(title, x   window.close(title, xOrigin=-1, yOrigin=-1, width=-1, height=-1, matchClass=False) Resize and/or move the specified windowsnippet   windowset_property(t   window.set_property(title, action, prop, matchClass=False) Set a property on the given window using the specified actionsnippet   windowswitch_desktop   window.switch_desktop(deskNum) Switch to the specified desktopsnippet   windowwait_for_exist   window.wait_for_exist(title, timeOut=5) Wait for window with the given title to be createdsnippet   windowwait_for_focus   window.wait_for_focus(title, timeOut=5) Wait for window with the given title to have focus
SessionList
:w Foundations_Metacognition_Checklistgg<F5><F5><F5><F5><F5><F5>;
w  Foundations_Metacognition_Checklist
let g:netrw_liststyle=3
set wildmode=longest,list,full
w! ~/zdotfiles/2/List.vim
vsp /home/ahmed/zdotfiles/2/List.vim
tabnew List.vim
w! ~/Dropbox/DCAR/READING/Foundations_Metacognition_Checklist
r List.vim
./filters.vim function! neocomplcache#filters#keyword_filter(list, complete_str) "{{{
    echomsg len(a:list)
        \ empty(a:list)
    return a:list
    let word = type(a:list[0]) == type('') ? 'v:val' : 'v:val.word'
    return filter(a:list, expr)
    return s:head_filter(a:list, complete_str)
function! s:head_filter(list, complete_str) "{{{
  let word = type(a:list[0]) == type('') ? 'v:val' : 'v:val.word'
  return filter(a:list, expr)
  let list = a:dictionary[key]
  if type(list) == type({})
    unlet list
    let list = values(a:dictionary[key])
    let list = copy(list)
        \ list : neocomplcache#keyword_filter(list, a:complete_str)
./pythoncomplete.vim "   * Fixed function list sorting (_ and __ at the bottom)
    "findstart = 0 when we need to return the list of completions
    def _parseimportlist(self):
        elif token == '[' or token == 'list':
                    imports = self._parseimportlist()
                    names = self._parseimportlist()
./zvim/smart-abbreviations.vim ./List.vim " Utilities for list.
function! s:pop(list)
  return remove(a:list, -1)
function! s:push(list, val)
  call add(a:list, a:val)
  return a:list
function! s:shift(list)
  return remove(a:list, 0)
function! s:unshift(list, val)
  return insert(a:list, a:val)
" Removes duplicates from a list.
function! s:uniq(list, ...)
  let list = a:0 ? map(copy(a:list), printf('[v:val, %s]', a:1)) : copy(a:list)
  while i < len(list)
    let key = string(a:0 ? list[i][1] : list[i])
      call remove(list, i)
  return a:0 ? map(list, 'v:val[0]') : list
function! s:clear(list)
  if !empty(a:list)
    unlet! a:list[0 : len(a:list) - 1]
  return a:list
" Concatenates a list of lists.
function! s:concat(list)
  let list = []
  for Value in a:list
    let list += Value
  return list
" Flattens a list.
function! s:flatten(list, ...)
  let list = []
    return a:list
  for Value in a:list
      let list += s:flatten(Value, limit)
      call add(list, Value)
  return list
" Sorts a list with expression to compare each two values.
function! s:sort(list, expr)
    return sort(a:list, a:expr)
  return sort(a:list, 's:_compare')
" Sorts a list using a set of keys generated by mapping the values in the list
function! s:sort_by(list, expr)
  let pairs = map(a:list, printf('[v:val, %s]', a:expr))
function! s:max(list, expr)
  echoerr 'Data.List.max() is obsolete. Use its max_by() instead.'
  return s:max_by(a:list, a:expr)
" Returns a maximum value in {list} through given {expr}.
" Returns 0 if {list} is empty.
function! s:max_by(list, expr)
  if empty(a:list)
  let list = map(copy(a:list), a:expr)
  return a:list[index(list, max(list))]
function! s:min(list, expr)
  echoerr 'Data.List.min() is obsolete. Use its min_by() instead.'
  return s:min_by(a:list, a:expr)
" Returns a minimum value in {list} through given {expr}.
" Returns 0 if {list} is empty.
function! s:min_by(list, expr)
  return s:max_by(a:list, '-(' . a:expr . ')')
" Returns List of character sequence between [a:from, a:to]
" Returns true if a:list has a:value.
function! s:has(list, value)
  return index(a:list, a:value) isnot -1
" Returns true if a:list[a:index] exists.
function! s:has_index(list, index)
  " let index = a:index >= 0 ? a:index : len(a:list) + a:index
  return 0 <= a:index && a:index < len(a:list)
" similar to Haskell's Data.List.span
" similar to Haskell's Data.List.break
" similar to Haskell's Data.List.takeWhile
" similar to Haskell's Data.List.partition
function! s:with_index(list, ...)
  return s:zip(a:list, range(base, len(a:list)+base-1))
function! s:find(list, default, f)
  for x in a:list
" Return non-zero if a:list1 and a:list2 have any common item(s).
function! s:has_common_items(list1, list2)
  return !empty(filter(copy(a:list1), 'index(a:list2, v:val) isnot -1'))
./snippet-conflict.vim ./vim-utility-functions.vim ./vim_workflow.vim " glob() wrapper which returns List
" globpath() wrapper which returns List
\   s:__TYPE_LIST,
" List
function! s:is_list(Value)
  return type(a:Value) ==# s:__TYPE_LIST
./zsnippet.vim ./htmlweb2py.vim ./vim_web2py_synta.vim syn keyword w2pValidators IS_LIST_OF IS_LOWER IS_MATCH IS_EQUAL_TO IS_NOT_EMPTY
./lynx/webBrowser.vim ./web2py_syntax.vim syn keyword w2pValidators IS_LIST_OF IS_LOWER IS_MATCH IS_EQUAL_TO IS_NOT_EMPTY
./StringComplete.vim " 	inoremap <C-J> <C-O>:set completefunc=StringComplete#GetList<CR><C-X><C-U>
" selected. Then, use CTRL-N and CTRL-P to move through the completion list as
" TODO LIST:
function! StringComplete#GetList(findstart, base) " {{{
