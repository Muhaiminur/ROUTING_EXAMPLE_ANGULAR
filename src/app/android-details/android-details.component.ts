import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Route, ParamMap } from '@angular/router';

@Component({
  selector: 'app-android-details',
  templateUrl: './android-details.component.html',
  styleUrls: ['./android-details.component.css']
})
export class AndroidDetailsComponent implements OnInit {

  public departmentid;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // let id =parseInt(this.route.snapshot.paramMap.get('num'));
    // this.departmentid = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('num'));
      this.departmentid = id;
    });
  }

  goprevious() {
    console.log("ABIR");
    let previous_id = this.departmentid - 1;
    this.router.navigate(['/android', previous_id]);
  }

  gonext() {
    let next_id = this.departmentid + 1;
    this.router.navigate(['/android', next_id]);
  }

  gotohomepage() {
    let fromdetails = this.departmentid ? this.departmentid : null;
    //this.router.navigate(['/android',{id:fromdetails}]);
    this.router.navigate(['../', { id: fromdetails }], { relativeTo: this.route });
  }

  androidnine() {
    this.router.navigate(['nine'], { relativeTo: this.route });
  }
  androidten() {
    this.router.navigate(['ten'], { relativeTo: this.route });
  }

}
