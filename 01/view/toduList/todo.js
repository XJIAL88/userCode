const vm = new Vue({
    el: '#app',
    methods: {
        remove(index) {
            this.todos = this.todos.filter((cur, i) => index !== i);
        },
        add() {
            this.todos.unshift({ isSelected: false, title: this.val });
            this.val = '';
        },
        event(cur) {
            this.cur = cur;
        },
        cancel() {
            this.cur = '';
        }
    },
    directives: { //=>自定义指令
        focus(el, bindings) {
            if (bindings.value) el.focus();
        }
    },
    data: {
        todos: [
            { isSelected: false, title: '睡觉' },
            { isSelected: false, title: '吃饭' }
        ],
        val: '',
        cur: '',
        hash: ''
    },
    computed: {
        cont() {
            return this.todos.filter(item => {
                return !item.isSelected;
            }).length;
        },
        newTodos() {
            if (this.hash === 'all') return this.todos;
            if (this.hash === 'unfinish') return this.todos.filter(item => !item.isSelected);
            if (this.hash === 'finish') return this.todos.filter(item => item.isSelected);
            return this.todos;
        }

    },
    watch: {
        //=>todos增加了数据，将存到localStorage
        todos: { //=>watch默认只监控一层的数据变化，深度监控
            handler() { //=>默认写成函数，就相当于默认写了handler
                localStorage.setItem('data', JSON.stringify(this.todos));
            },
            deep: true
        }
    },
    created() {
        //=>将存在localStorage的值去取出赋值到todos
        this.todos = JSON.parse(localStorage.getItem('data')) || this.todos;
        //=>有hash值获取hash添加到this.hash,没有hash让其显示全部
        this.hash = window.location.hash.slice(2) || 'all';
        //=>监控hash值变化
        window.addEventListener('hashchange', () => {
            this.hash = window.location.hash.slice(2) || 'all';
        });
    }
});