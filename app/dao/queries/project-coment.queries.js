"use strict";

class ProjectComentQueries {
	static get signUp() {
		return `INSERT INTO project_coment
        (Id,
        CreateTime,
        ProjectId,
        EmployeeId,
        Name)
        VALUES
        (null,
        NOW(),
        ?,
        ?,
        ?)`
        ;
    };
    
    static get getComment(){
        return `select p.EmployeeId,date(p.CreateTime) as CreateTime,p.Name as Comment,e.Name as EmployeeName,e.Surname as EmployeeSurname,e.Image,pe.Name as EmployeePosition from project_coment p 
                inner join employee e
                    on e.Id = p.EmployeeId
                inner join position_employees pe
                    on pe.Id = e.PositionId 
                     where p.ProjectId  = ?`
    }
}

module.exports = { ProjectComentQueries };