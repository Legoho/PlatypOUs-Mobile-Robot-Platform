Vue.component("diagnostics", {
  template: `
  <div>
    <b-container fluid>
      
      <b-card class="mb-2" style="backgroundColor: #1e2b4e; color: #fab001;">
        <b-card-title class="text-center" style="font-size: 30px;">Status</b-card-title >
        <b-card-text>
          Battery voltage: {{ round(robot_status.battery_voltage, 2) }} V
        </b-card-text>
        <b-card-text>
          Motor current: {{ round(robot_status.motor_current, 2) }} A
        </b-card-text>
        <b-card-text>
          Motor driver status: {{ robot_status.motor_driver_status }}  
        </b-card-text>
        <b-card-text>
          Motor driver errors: {{ robot_status.motor_driver_errors }} 
        </b-card-text>
        <b-card-text>
          Delay: {{ round(robot_status.ping_delay, 2) }} ms
        </b-card-text>
      </b-card>
      
      <b-card class="mb-2" style="backgroundColor: #1e2b4e; color: #fab001;">
        <b-card-title class="text-center" style="font-size: 30px;">Pose</b-card-title>
        <b-card-text>
          Robot X position: {{ round(robot_status.robot_pos_x, 2) }} m
        </b-card-text>
        <b-card-text>
          Robot Y position: {{ round(robot_status.robot_pos_y, 2) }} m
        </b-card-text>
        <b-card-text>
          Robot heading: {{ round(robot_status.robot_heading, 2) }} rad
        </b-card-text>
        <b-card-text>
          Robot linear velocity: {{ round(robot_status.robot_lin_vel, 2) }} m/s
        </b-card-text>
        <b-card-text>
          Robot angular velocity: {{ round(robot_status.robot_ang_vel, 2) }} rad/s 
        </b-card-text>
      </b-card>
      
    </b-container>
  </div>
  `,
  
  data(){
    return {
      robot_status: new Object()
    };
  },
  
  methods: { 
    updateRobotStatus: function(data){
      this.robot_status = data;
    },
    
    round: function(val, digits) {
      if (val == null)
      {
        val = 0;
      }  
        return val.toFixed(digits);
    }
  }
});
