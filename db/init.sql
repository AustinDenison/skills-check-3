create table houses (
    houses_id serial primary key not null,
    property_name text not null,
    address varchar not null,
    city text not null,
    state text not null,
    zip integer not null
)