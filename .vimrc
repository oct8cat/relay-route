let g:NERDTreeIgnore = ['node_modules']
let g:ctrlp_custom_ignore = join(g:NERDTreeIgnore, '\|')
let g:ale_linters ={'javascript': ['standard']}
