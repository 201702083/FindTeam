<template>
    <b-card>
        <b-row>
            <b-col >
                {{project.pid}} , {{formatName(project.name)}}
            </b-col>
            <b-col >
                <b-icon-door-open></b-icon-door-open>
                <b-icon-gear-fill></b-icon-gear-fill>
            </b-col>
        </b-row>
        
    </b-card>
</template>

<script>
export default {
    setup() {
        
    },
    props:{project:Object}
    ,
    methods:{
        formatName: function(name){
            if (name.length > 15){
                return name.substr(0,15)+' ...'
            }
            return name
        }
    }
}
</script>